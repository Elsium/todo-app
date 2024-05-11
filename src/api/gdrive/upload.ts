import axios from 'axios'
import {IList} from '@/redux/Features/listsSlice'
import {ITag} from '@/redux/Features/tagsSlice'
import {ITodo} from '@/redux/Features/todosSlice'
import {ISticker} from '@/redux/Features/stickersSlice'
import {checkIfFileExists} from '@/api/gdrive/checkIfFileExists'

export const uploadState = async (state: IList[] | ITag[] | ITodo[] | ISticker[], filename: string, accessToken: string) => {
    const isFile = await checkIfFileExists(filename, accessToken)
    const fileMetadata = {
        name: filename,
        mimeType: 'application/json',
    }
    const media = {
        mimeType: 'application/json',
        body: JSON.stringify(state),
    }

    try {
        if (isFile) {
            const url = `https://www.googleapis.com/upload/drive/v3/files/${isFile[0].id}?uploadType=media`
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