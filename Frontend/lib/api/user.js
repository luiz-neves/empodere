import axios from '../axios'

export const get = async () => {
  try {
    const res = await axios([], {
      method: 'get',
      url: '/user',
      auth: {
        username: 'funcionario@empresa.com',
        password: 'password',
      }
    })
    return res
  } catch (err) {
    throw err
  }
}

const routes = { get }

export default routes
