import axios from 'axios'
import {getFileIdByName} from '@/app/api/gdrive/getFileIdByName'

export const getState = async (accessToken: string) => {
    const fileId = getFileIdByName('todo-app-state.json', accessToken)
    if (!fileId) return
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