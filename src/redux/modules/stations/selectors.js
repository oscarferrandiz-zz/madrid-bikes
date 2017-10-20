import { createSelector } from 'reselect';

const stationList = state => state.stations.list;
const activeStations = createSelector(
    stationList,
    stations => stations.filter(station => !station.no_available)
);

export { activeStations };
