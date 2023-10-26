import axios from 'axios'

export const fetchClient = async () => {
    try {
        const response = await axios.get('https://rimac-front-end-challenge.netlify.app/api/user.json')
        return response.data
    } catch (err) {
        console.log(err)
    }
}



