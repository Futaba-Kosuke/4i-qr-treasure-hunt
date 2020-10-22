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
  qrImageMap['https://ac.com'] = {
    'title': '',
    'path': '/assets/ac.jpg'
  }
  qrImageMap['https://wa.com'] = {
    'title': '',
    'path': '/assets/wa.jpg'
  }
  
  return qrImageMap
}

const useStateProps = () => {
  const qrReducer = useSelector((state) => state.qrReducer)
  
  const qrImageMap = qrImageMapCreater(5)
  const content = qrImageMap[qrReducer.content]

  const acContentPath = '/assets/ac.jpg'
  const waContentPath = '/assets/wa.jpg'

  return {
    isOpen: content !== undefined,
    contentTitle: content?.title,
    contentPath: content?.path,
    isAC: content?.path === acContentPath,
    isWA: content?.path === waContentPath
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
