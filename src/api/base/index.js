import axios from 'axios'

class Request {
  constructor (
    url,
    baseURL = 'http://localhost:3000/api',
    header = { 'Content-Type': 'application/json' }
  ) {
    this.url = url
    this.baseURL = baseURL
    this.header = header
    this.request = axios.create({ baseURL: this.baseURL, headers: this.header })
  }

  async get (params = {}) {
    return this.request.get(this.url, { params })
  }

  async post (value) {
    return this.request.post(this.url, value)
  }
}

export default Request
