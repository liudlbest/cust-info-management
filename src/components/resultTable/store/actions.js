import * as constants from './constants';
import Axios from 'axios';
import { fromJS } from 'immutable';

const updateCustomers = (data) => {
  return {
    type: constants.UPDATE_CUSTOMERS,
    data: fromJS(data)
  }
}

export const getCustomers = () => {
  return (dispatch) => {
    Axios.get('http://localhost:3001/customers')
      .then( res => {
        // TODO: DEL
        console.log("dispatch getCustomers");
        dispatch(updateCustomers(res.data));
      })
  }
}