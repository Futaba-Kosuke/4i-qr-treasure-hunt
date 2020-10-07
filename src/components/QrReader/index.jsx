import React from 'react'
import QrReader from 'react-qr-reader'

const MyQrReader = (props) => {
  const handleSetQrContent = props.handleSetQrContent

  const handleScan = (data) => {
    if (data) {
      handleSetQrContent(data)
    }
  }
  
  const handleError = (err) => {
    console.error(err)
  }

  return (
    <div>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
    </div>
  )
}

export default MyQrReader;
