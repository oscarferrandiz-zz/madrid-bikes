import {
  SET,
  SET_LOADING,
  SET_ERROR,
  SET_FILTER
} from './constants';
import { getStations } from '@/utils/api';

/* Action creators */
const setStations = datasets => ({
  type: SET,
  payload: datasets
});

const setLoading = loading => ({
  type: SET_LOADING,
  payload: loading
});

const setError = error => ({
  type: SET_ERROR,
  payload: error
});

const setFilter = filter => ({
  type: SET_FILTER,
  payload: filter
});

/* Thunks */
const fetchStations = () => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    const data = await getStations();
    dispatch(setStations(data.data.stations));
  } catch (error) {
    dispatch(setError(error.message));
  }

  dispatch(setLoading(false));
};

export { setStations, setLoading, setError, setFilter, fetchStations };
