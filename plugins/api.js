import {NuxtAxiosHttpClient} from '@/common/services/HttpClient/NuxtAxiosHttpClient'
import Api from '@/common/services/HttpClient/Api'

const APIPlugin = ({$axios}, inject) => {
    const axiosHttpClient = new NuxtAxiosHttpClient($axios)

    inject('api', new Api(axiosHttpClient))
}

export default APIPlugin
