import * as constants from './constants';
import Axios from 'axios';

export const getCustomers = () => {
  return (dispatch) => {
    Axios.get('http://localhost:3001/customers')
      .then( res => {
        console.log(res);
      })
  }
}