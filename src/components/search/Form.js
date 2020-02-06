import React from 'react'
import {
  TextField,
  Button,
} from '@material-ui/core';

import { useStyles } from './style'

export default function SearchForm() {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField id="customerName" label="Customer Name" />
        <TextField id="phoneNumber" label="Phone Number" type="search" />
      </div>

      <div>
        <Button color="primary" variant="contained">Search</Button>
      </div>
    </form>
  )
}
