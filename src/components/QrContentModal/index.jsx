import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const QrContentModal = (props) => {
  const classes = useStyles()
  
  const isOpen = props.isOpen
  const contentTitle = props.contentTitle
  const contentPath = props.contentPath

  const handleResetQrContent = props.handleResetQrContent

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={isOpen}
        onClose={handleResetQrContent}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpen}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                { contentTitle }
              </Typography>
              <CardMedia style={{ height: "80vw", width: "80vw" }} image={process.env.PUBLIC_URL + contentPath}/>
            </CardContent>
          </Card>
        </Fade>
      </Modal>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

export default QrContentModal
