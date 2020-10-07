import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { resetQrContent } from '../redux/actions.js'
import QrContentModal from '../components/QrContentModal'

const useStateProps = () => {
  const qrReducer = useSelector((state) => state.qrReducer)

  return {
    isOpen: qrReducer.content !== ''
  }
}

const useDispatchProps = () => {
  const dispatch = useDispatch()

  const handleResetQrContent = React.useCallback((content) =>
    {
      dispatch(resetQrContent())
    },
    [dispatch]
  )

  return {
    handleResetQrContent
  }
}

const QrContentModalContainer = (props) => {
  const _props = { ...useStateProps(), ...useDispatchProps(), ...props }

  return <QrContentModal {..._props}/>
}

export default QrContentModalContainer
