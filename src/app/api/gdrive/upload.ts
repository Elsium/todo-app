import axios from 'axios'
import {getFileIdByName} from '@/app/api/gdrive/getFileIdByName'
import {List} from '@/app/redux/Features/listsSlice'
import {Tag} from '@/app/redux/Features/tagsSlice'
import {Todo} from '@/app/redux/Features/todosSlice'
import {Sticker} from '@/app/redux/Features/stickersSlice'

export const uploadState = async (state: List[] | Tag[] | Todo[] | Sticker[], filename: string, accessToken: string) => {
    const fileId = getFileIdByName(filename, accessToken)
    const fileMetadata = {
        name: filename,
        mimeType: 'application/json',
    }
    const media = {
        mimeType: 'application/json',
        body: JSON.stringify(state),
    }

    try {
        if (fileId) {
            const url = `https://www.googleapis.com/upload/drive/v3/files/${fileId}?uploadType=media`
            const response = await axios.patch(url, media.body, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
            })
            return response.data
        } else {
            const formData = new FormData()
            formData.append('metadata', new Blob([JSON.stringify(fileMetadata)], { type: 'application/json' }))
            formData.append('file', new Blob([JSON.stringify(media.body)], { type: 'application/json' }))

            const response = await axios.post(
                'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart',
                formData,
                {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                        'Content-Type': 'multipart/related',
                    },
                }
            )
            return response.data
        }
    } catch (error) {
        console.error('Error post state to Google Drive: ', error)
        throw error
    }
}