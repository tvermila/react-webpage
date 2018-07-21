import axios from 'axios'

const url = 'api/mail'

const send = async (mailData) => {
  console.log('mailService:',mailData)
  const response = await axios.post(url, mailData)
  console.log('mailService response', response)
  return response
}

export default { send }