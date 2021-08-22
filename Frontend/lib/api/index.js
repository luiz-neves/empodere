import authService from './auth'
import userService from './user'

export const auth = authService
export const user = userService

const endPoints = {
  auth,
  user,
}

export default endPoints
