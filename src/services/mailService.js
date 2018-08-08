import axios from 'axios'

const url = 'api/mail'

const send = async (mailData) => {
  const response = await axios.post(url, mailData)
  return response
}

export default { send }