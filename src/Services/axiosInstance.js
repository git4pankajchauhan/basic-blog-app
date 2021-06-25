import axios from 'axios'
import { store } from 'Store/store'

const axiosInstance = axios.create({
  baseURL: `http://localhost:5000`,
})

axiosInstance.interceptors.request.use(config => {
  const state = store.getState()
  const token = state.auth.token
  config.params = config.params || {}
  config.headers['Accept'] = "Content-type': 'application/json"
  if (token) config.headers['x-access-token'] = token
  return config
})

export default axiosInstance
