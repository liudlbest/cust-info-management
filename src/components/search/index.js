import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import SearchForm from './Form'

export default function Seach() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" >
        <Typography component="div" align="center" >
          <SearchForm />
        </Typography>
      </Container>
    </React.Fragment>
  )
}
