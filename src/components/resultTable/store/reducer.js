import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  customers: [{
    name: "zhangsan"
  }],
});

export default (state = defaultState, action ) => {
  switch ( action.type ) {
    default: 
      return state;
  }
}