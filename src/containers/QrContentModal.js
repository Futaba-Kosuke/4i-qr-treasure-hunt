import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { resetQrContent } from '../redux/actions.js'
import QrContentModal from '../components/QrContentModal'

const qrImageMapCreater = (num) => {
  let qrImageMap = {}
  for (let i = 1; i <= num; i++) {
    qrImageMap['https://' + String(i) + '.com'] = {
      'title': 'ヒント' + String(i),
      'path': '/assets/' + String(i) + '.png'
    }
  }
  return qrImageMap
}

const useStateProps = () => {
  const qrReducer = useSelector((state) => state.qrReducer)
  
  const qrImageMap = qrImageMapCreater(4)
  const content = qrImageMap[qrReducer.content]

  return {
    isOpen: content !== undefined,
    contentTitle: content?.title,
    contentPath: content?.path
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
