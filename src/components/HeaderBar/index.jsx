import React from 'react'
import CssBaseLine from '@material-ui/core/CssBaseLine'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const HeaderBar = (props) => {
  return (
    <>
      <CssBaseLine/>
      <AppBar position="static">
        <Toolbar style={{ display: 'felx', alignItems: 'center', justifyContent: 'center' }} >
          <Typography variant="h6">
            QRコード宝探し / NitKit Fes 4I
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default HeaderBar
