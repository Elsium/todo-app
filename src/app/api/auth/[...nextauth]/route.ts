import {NextAuthOptions} from 'next-auth'
import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'
import axios from 'axios'

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!
const GOOGLE_CLIENT_SECRET =  process.env.GOOGLE_CLIENT_SECRET!

const authOption: NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },
    providers: [
        GoogleProvider({
            clientId: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks: {
        async jwt({token, account}) {
            if (account?.expires_at && account.access_token) {
                token.accessToken = account.access_token
                token.refreshToken = account.refresh_token
                token.accessTokenExpires = Date.now() + account.expires_at * 1000
                return token
            }
            if (!token.accessTokenExpires || Date.now() < token.accessTokenExpires) {
                return token
            }
            try {
                const response = await axios.post('https://oauth2.googleapis.com/token', {
                    client_id: GOOGLE_CLIENT_ID,
                    client_secret: GOOGLE_CLIENT_SECRET,
                    refresh_token: token.refreshToken,
                    grant_type: 'refresh_token',
                })

                token.accessToken = response.data.access_token
                token.accessTokenExpires = Date.now() + response.data.expires_in * 1000
                return token
            } catch (error) {
                console.error('Error refreshing access token: ', error)
                return token
            }
        },
        async session({ session, token }) {
            session.accessToken = token.accessToken
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