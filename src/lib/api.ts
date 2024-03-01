import axios from 'axios'

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? process.env.NEXT_PUBLIC_API_URL
      : 'https://localhost:3000/api',
  // outras configurações globais
})

export default api
