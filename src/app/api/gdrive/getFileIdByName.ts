import axios from 'axios'

export const getFileIdByName = async (fileName: string, accessToken: string) => {
    try {
        const response = await axios.get('https://www.googleapis.com/drive/v3/files', {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
            params: {
                q: `name='${fileName}' and trashed=false`,
                spaces: 'drive',
                fields: 'files(id, name)',
            },
        })

        const files = response.data.files
        if (files.length > 0) {
            return files[0].id
        } else {
            return null
        }
    } catch (error) {
        console.error('Error searching file: ', error)
        throw error
    }
}