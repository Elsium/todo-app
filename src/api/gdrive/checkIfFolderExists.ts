import axios from 'axios'
import {signIn} from 'next-auth/react'

export const checkIfFolderExists = async (accessToken: string) => {
    try {
        const response = await axios.get('https://www.googleapis.com/drive/v3/files', {
            params: {
                q: `name='TaskZen_app' and mimeType='application/vnd.google-apps.folder' and trashed=false`
            },
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Accept': 'application/json'
            }
        })
        return response.data.files.length > 0 ? response.data.files[0].id : null
    } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 401) signIn('google', {callbackUrl: '/work'})
    }
}