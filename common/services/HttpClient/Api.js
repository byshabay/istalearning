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
    var lang = sessionStorage.getItem('lang')
    if (lang == undefined || lang == null) {
      var lang = 'ru'
    }
    // return this.httpClient.post(`${lang}/api/event_order/`, body)
    return this.httpClient.post(`ru/api/event_order/`, body)
  }

  sendConsultation(body) {
    var lang = sessionStorage.getItem('lang')
    if (lang == undefined || lang == null) {
      var lang = 'ru'
    }
    // return this.httpClient.post(`${lang}/api/event_order/`, body)
    return this.httpClient.post(`ru/api/consultation_order/`, body)
  }

  catMetaData(params = '') {
    var lang = sessionStorage.getItem('lang')
    if (lang == undefined || lang == null) {
      var lang = 'ru'
    }


    return this.httpClient.get(`ru/api/meta_data/${params}`)
  }
}

export default Api
