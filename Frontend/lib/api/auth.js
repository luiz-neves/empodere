import axios from '../axios'

export const post = async ({ username, password}) => {
  try {
    const res = await axios([], {
      method: 'post',
      url: '/auth',
      auth: {
        username,
        password,
      },
    })
    return res
  } catch (err) {
    throw err
  }
}

const routes = { post }

export default routes
