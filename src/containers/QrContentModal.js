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
  qrImageMap['https://win.com'] = {
    'title': '',
    'path': '/assets/win.png'
  }
  return qrImageMap
}

const useStateProps = () => {
  const qrReducer = useSelector((state) => state.qrReducer)
  
  const qrImageMap = qrImageMapCreater(4)
  const content = qrImageMap[qrReducer.content]

  const winContentPath = '/assets/win.png'

  return {
    isOpen: content !== undefined || content?.path === winContentPath,
    contentTitle: content?.title,
    contentPath: content?.path,
    isWin: content?.path === winContentPath
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
