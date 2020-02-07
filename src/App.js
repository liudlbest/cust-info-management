import React from 'react';
import { Provider } from "react-redux";
import { CssBaseline, 
  Typography, 
  Container 
} from "@material-ui/core";

import store from './store'
import Search from './components/search'
import HeaderBar from './components/headBar';
import ResultTable from './components/resultTable';
import Detail from './components/detail';

export default function SimpleContainer() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Container maxWidth="lg" >
        <Typography component="div" align="center" >
          <HeaderBar />
          <Search />
          <ResultTable />
          <Detail />
        </Typography>
      </Container>
    </Provider>
  );
}