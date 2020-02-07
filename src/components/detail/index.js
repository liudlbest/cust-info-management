import React from 'react';
import Modal from '@material-ui/core/Modal';

import { useStyles }  from './style';
import { Button } from '@material-ui/core';

export default function Detail(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }
  return (
     <div >
      <Button variant="contained" color="default" onClick={handleOpen}>
        Detail
      </Button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
        className={classes.modal}
      >
        <div className={classes.paper} >
          <h2 id="simple-modal-title">Notes</h2>
          <p id="simple-modal-description">
            {
              props.notes && props.notes.length > 0 &&
                props.notes.map((note, index) => {
                  return (
                    <li key={index}>{note}</li>
                  )
                })
            }
          </p>
          <div>Hello</div>
        </div>
      </Modal>
    </div> 
  )
}
