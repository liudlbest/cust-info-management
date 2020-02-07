import * as constants from './constants';
import Axios from 'axios';
import { fromJS } from 'immutable';

const updateCustomers = (data) => {
  return {
    type: constants.UPDATE_CUSTOMERS,
    data: fromJS(data)
  }
}

export const getCustomers = (req) => {
  let queryStr = '?';
  for( let key in req ) {
    // if status is 'All', continue
    if( key === 'status' && req[key] === constants.CUST_STATUS[0]){
      continue;
    }
    if(req[key]){
      if( key === 'name' || key === 'id' ) {
        queryStr += key + '_like=' + req[key] + '&';
      } else {
        queryStr += key + '=' + req[key] + '&';
      }
    }
  }
  return (dispatch) => {
    Axios.get('http://localhost:3001/customers' + queryStr)
      .then( res => {
        // TODO: DEL
        console.log("dispatch getCustomers");
        dispatch(updateCustomers(res.data));
      })
  }
}