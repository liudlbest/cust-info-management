import { combineReducers } from "redux-immutable";
import { reducer as resultTableReducer } from '../components/resultTable/store';

const reducer = combineReducers({
  result: resultTableReducer
});

export default reducer;