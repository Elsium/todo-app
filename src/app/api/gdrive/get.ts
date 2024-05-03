import axios from 'axios'
import {getFileIdByName} from '@/app/api/gdrive/getFileIdByName'
import {checkIfFileExists} from '@/app/api/gdrive/checkIfFileExists'

export const getState = async ({accessToken, filename}: {accessToken: string, filename: string}) => {
    const isFile = checkIfFileExists(filename, accessToken)
    if(!isFile) return null
    const fileId = getFileIdByName(filename, accessToken)
    if (!fileId) return null
    try {
        const response = await axios.get(`https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`, {
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