import axios from 'axios'

const api = axios.create({
  // configure baseURL as needed
  baseURL: '/',
  headers: { 'Content-Type': 'application/json' },
})

export default api
