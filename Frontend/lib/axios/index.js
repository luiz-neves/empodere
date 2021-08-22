import axios from 'axios'

const rootApi = process.env.ROOT_API

const axiosWrapper = async (router, req) => {
  try {
    const res = await axios({
      ...req,
      url: `${rootApi}${req.url}`,
      withCredentials: true,
    })
    return res
  } catch (err) {
    console.log(err)
    if (err.response.status === 401) {
      router.push('/login')
    }
    throw err
  }
}

export default axiosWrapper
