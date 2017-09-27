import {
  SET,
  SET_LOADING,
  SET_ERROR,
  SET_FILTER
} from './constants';
import { createReducer } from '@/redux/utils';

/* Initial state */
const INITIAL_STATE = {
  list: [],
  error: null,
  loading: false,
  filter: 'all'
};

export default createReducer(INITIAL_STATE, {

  [SET](state, action) {
    return {
      ...state,
      list: action.payload
    };
  },

  [SET_LOADING](state, action) {
    return {
      ...state,
      loading: action.payload
    };
  },

  [SET_ERROR](state, action) {
    return {
      ...state,
      error: action.payload
    };
  },

  [SET_FILTER](state, action) {
    return {
      ...state,
      filter: action.payload
    };
  }
});
