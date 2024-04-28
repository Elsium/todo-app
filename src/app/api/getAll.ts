import axios from 'axios'

export const getAll = async () => {
    const response = await axios.get('/data.json')
    return response.data
}