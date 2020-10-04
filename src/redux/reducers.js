import { handleActions } from 'redux-actions'
import { setQrContent, resetQrContent} from './actions'

const initialState = {
  content: '',
}

// Qr management reducer
export const qrReducer = handleActions({
  [setQrContent]: (state, action) => ({
    ...state,
    content: action.payload.qrContent
  }),
  [resetQrContent]: (state, action) => ({
    ...state,
    content: ''
  })
}, initialState)
