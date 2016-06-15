import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form'

import layout from './layout';


const rootReducer = combineReducers({
  layout : layout,
  form: formReducer
});

export default rootReducer;
