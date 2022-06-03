class Api {

  constructor(httpClient) {
      this.httpClient = httpClient
  }

  getEvents(params = '') {
      return this.httpClient.get(`event/${params}`)
  }

  sendSubscribe(body) {
    return this.httpClient.post('event_order/', body)
  }
}

export default Api
