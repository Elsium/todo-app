import {NextAuthOptions} from 'next-auth'
import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'
import axios from 'axios'

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!
const GOOGLE_CLIENT_SECRET =  process.env.GOOGLE_CLIENT_SECRET!

async function refreshAccessToken(token: any) {
    try {
        const url = 'https://oauth2.googleapis.com/token?' +
            new URLSearchParams({
                client_id: GOOGLE_CLIENT_ID,
                client_secret: GOOGLE_CLIENT_SECRET,
                refresh_token: token.refreshToken,
                grant_type: 'refresh_token',
            })

        const response = await axios.post(url, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })

        if (!response.data.ok) throw response.data

        return {
            ...token,
            accessToken: response.data.access_token,
            accessTokenExpires: Date.now() + response.data.expires_in * 1000,
            refreshToken: response.data.refresh_token ?? token.refreshToken
        }
    } catch (error) {
        console.error(error)

        return {
            ...token,
            error: 'RefreshAccessTokenError'
        }
    }
}

const authOption: NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },
    providers: [
        GoogleProvider({
            clientId: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    scope: 'openid email profile https://www.googleapis.com/auth/drive.file'
                }
            }
        })
    ],
    callbacks: {
        async jwt({token, account}) {
            if (account) {
                token.accessToken = account.access_token
            }
            if (!token.accessTokenExpires || Date.now() < token.accessTokenExpires) {
                return token
            }
            return refreshAccessToken(token)
        },
        async session({ session, token }) {
            if (token) {
                session.accessToken = token.accessToken
                session.error = token.error
            }
            return session
        },
        async signIn({profile}) {
            if(!profile?.email) {
                throw new Error('No profile')
            }
            return true
        }
    }
}

const handler = NextAuth(authOption)
export {handler as GET, handler as POST}