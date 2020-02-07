import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  TextField,
  Button,
} from '@material-ui/core';

import { useStyles } from './style'
import * as actions from '../resultTable/store/actions'

/**
 * A serch form.
 */
export default function SearchForm() {
  const classes = useStyles();

  const [ name, setName ] = useState('');
  const [ phone, setPhone ] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getCustomers())
    return () => {
    };
  }, [dispatch])
  
  const search = () => {
    const req = {
      name,
      phone
    }
    dispatch(actions.getCustomers(req));
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField id="name" label="Customer Name" value={name} onChange={(e) => setName(e.target.value)}/>
        <TextField id="phone" label="Phone Number" type="search" value={phone} onChange={(e) => setPhone(e.target.value)}/>
      </div>

      <div>
        <Button color="primary" variant="contained" onClick={search}>Search</Button>
      </div>
    </form>
  )
}
