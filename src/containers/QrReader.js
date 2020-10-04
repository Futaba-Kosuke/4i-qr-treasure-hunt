import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setQrContent, resetQrContent} from '../redux/actions.js'
import QrReader from '../components/QrReader.jsx'

// Stateを整形してPropsに挿入
const useStateProps = () => {
  const qrReducer= useSelector((state) => state.qrReducer)

  return { qrReducer }
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

  const handleResetQrContent = React.useCallback(() =>
    {
      dispatch(resetQrContent)
    },
    [dispatch]
  )

  return {
    handleSetQrContent,
    handleResetQrContent
  }
}

// export default connect(useStateProps, useDispatchProps)(QrReader)

const QrReaderContainer = (props) => {
  const _props = { ...useStateProps(), ...useDispatchProps(), ...props }
  return <QrReader {..._props}/>
}

export default QrReaderContainer
