import React, { useState } from 'react'
import QrReader from 'react-qr-reader'

const MyQrReader = () => {
  const [qrResult, setQrResult] = useState('No Resule')

  const handleScan = (data) => {
    if (data) {
      setQrResult(data)
    }
    console.log(qrResult)
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
