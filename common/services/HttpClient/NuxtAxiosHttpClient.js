const domain = 'http://shabba0u.beget.tech/'
// const prefix = 'ru/api/'
// const baseURL = `${domain}${prefix}`

const baseURL = `${domain}`



export class NuxtAxiosHttpClient {

  constructor(axiosInstance) {
    this.axiosInstance = axiosInstance
  }

  // getLang(siteLang = 'ru') {
  //   return siteLang
  // }


  async get(path) {
    const fullPath = `${baseURL}${path}`
    //  async get(path, siteLang = 'ru') {
    //   const fullPath = `${baseURL}${siteLang}/api/${path}`

    try {
      const { data } = await this.axiosInstance.get(fullPath)
      return data
    } catch (error) {
      return error
    }
  }

  async post(path, body) {
    const fullPath = `${baseURL}${path}`

    try {
      const { data } = await this.axiosInstance.post(fullPath, body)
      return data
    } catch (error) {
      return error
    }
  }

  async request(config) {
    config.url = `${baseURL}${config.url}`

    try {
      const { data } = await this.axiosInstance.request(config)
      return data
    } catch (error) {
      return error
    }
  }
}
