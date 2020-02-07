import { combineReducers } from "redux-immutable";
import { reducer as resultReducer } from '../components/resultTable/store';

const reducer = combineReducers({
  result: resultReducer
});

export default reducer;