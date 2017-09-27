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
  filters: {
    dock_bikes: true,
    free_bases: true
  }
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
      filters: {
        ...state.filters,
        [action.payload.name]: action.payload.value
      }
    };
  }
});
