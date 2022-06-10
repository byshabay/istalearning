class Api {

  constructor(httpClient) {
    this.httpClient = httpClient
  }


  getEvents(params = '') {
    var lang = sessionStorage.getItem('lang')
    if (lang == undefined || lang == null) {
      var lang = 'ru'
    }


    return this.httpClient.get(`${lang}/api/event/${params}`)
  }

  sendSubscribe(body) {
    return this.httpClient.post('event_order/', body)
  }
}

export default Api
