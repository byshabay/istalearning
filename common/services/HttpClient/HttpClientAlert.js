import { showGlobalModal } from 'services/Popup.js'

const showError = (message, title = 'Упс') =>
    showGlobalModal({
        type: 'error',
        message: {
            title,
            detail: message
        }
    })

export default (error) => {
    if (error.response.status >= 500) {
        showError(errorTemplate.numberError(error.message))
        return
    }
}
