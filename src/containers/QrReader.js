import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setQrContent } from '../redux/actions.js'
import QrReader from '../components/QrReader.jsx'

// Stateを整形してPropsに挿入
const useStateProps = () => {
  const qrReducer= useSelector((state) => state.qrReducer)

  return {
    qrContent: qrReducer.content
  }
}

// Actionを整形してPropsに挿入
const useDispatchProps = () => {
  const dispatch = useDispatch()

  const handleSetQrContent = React.useCallback((content) =>
    {
      dispatch(setQrContent(content))
    },
    [dispatch]
  )

  return {
    handleSetQrContent
  }
}

const QrReaderContainer = (props) => {
  const _props = { ...useStateProps(), ...useDispatchProps(), ...props }
  return <QrReader {..._props}/>
}

export default QrReaderContainer
