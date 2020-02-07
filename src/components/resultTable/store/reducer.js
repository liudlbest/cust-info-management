import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  customers: [{
    id: '1234',
    name: "zhangsan",
    status: 'active',
    phone: '13471234',
    email: 'zhangsan@gmail.com',
    notes: ["haha"]
  },{
    id: '2234',
    name: "lisi",
    status: 'active',
    phone: '13471234',
    email: 'zhangsan@gmail.com',
    notes: ["haha"]
  }],
});

export default (state = defaultState, action ) => {
  switch ( action.type ) {
    case constants.UPDATE_CUSTOMERS:
      return state.set("customers", action.data);
    default: 
      return state;
  }
}