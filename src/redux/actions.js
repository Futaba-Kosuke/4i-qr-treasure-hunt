import { createAction } from 'redux-actions'
import { types } from './actionTypes.js'

// qrReducer
export const setQrContent = createAction(types.SET_QR_CONTENT, (qrContent) => ({ qrContent: qrContent }))
export const resetQrContent = createAction(types.RESET_QR_CONTENT)
