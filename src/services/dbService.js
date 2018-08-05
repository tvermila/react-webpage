import axios from 'axios'

const url = '/api/db'

const getHistory = async () => {
  const response = await axios.get(`${url}/history`)
  return response.data
}

const getEducation = async () => {
  const response = await axios.get(`${url}/education`)
  return response.data
}

export default { getHistory, getEducation }