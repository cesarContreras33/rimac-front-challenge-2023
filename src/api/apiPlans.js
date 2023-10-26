
import axios from 'axios'

export const fetchPlans = async () => {
  try {
    const response = await axios.get('https://rimac-front-end-challenge.netlify.app/api/plans.json')
    return response.data
  } catch (err) {
    console.log(err)
  }
}

