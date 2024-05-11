import axios from 'axios'
import {checkIfFileExists} from '@/api/gdrive/checkIfFileExists'

export const getState = async ({accessToken, filename}: {accessToken: string, filename: string}) => {
    const isFile = await checkIfFileExists(filename, accessToken)
    if(!isFile) return null
    try {
        const response = await axios.get(`https://www.googleapis.com/drive/v3/files/${isFile[0].id}?alt=media`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
        })
        return response.data
    } catch (error) {
        console.error('Error get state from Google Drive: ', error)
        throw error
    }
}