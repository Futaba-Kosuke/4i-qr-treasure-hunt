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
        <Toolbar>
          <Typography>
            高専祭2020 4I / QRを探せ!
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default HeaderBar
