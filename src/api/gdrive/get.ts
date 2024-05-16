import axios from 'axios'
import {checkIfFileExists} from '@/api/gdrive/checkIfFileExists'
import {checkIfFolderExists} from '@/api/gdrive/checkIfFolderExists'

export const getState = async ({accessToken, filename}: {accessToken: string, filename: string}) => {
    const folderId = await checkIfFolderExists(accessToken)
    if (!folderId) {
        console.warn('Folder TaskZen_app does not exist')
        return null
    }
    const isFile = await checkIfFileExists(filename, accessToken)
    if (!isFile) return null
    try {
        const response = await axios.get(`https://www.googleapis.com/drive/v3/files/${isFile[0].id}?alt=media`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
        })
        return response.data
    } catch (error) {
        return error
    }
}