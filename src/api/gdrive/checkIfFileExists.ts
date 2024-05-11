import axios from 'axios'

export async function checkIfFileExists(filename: string, accessToken: string) {
    try {
        const response = await axios.get('https://www.googleapis.com/drive/v3/files', {
            params: {
                q: `name='${filename}' and trashed=false`
            },
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Accept': 'application/json'
            }
        })
        return response.data.files.length > 0 && response.data.files
    } catch (error) {
        console.error('Error checking if file exists:', error)
        throw error
    }
}