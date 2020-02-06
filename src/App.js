import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Search from './components/search'
import HeaderBar from './components/headBar';
import ResultTable from './components/resultTable';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" >
        <Typography component="div" align="center" >
          <HeaderBar />
          <Search />
          <ResultTable />
        </Typography>
      </Container>
    </React.Fragment>
  );
}