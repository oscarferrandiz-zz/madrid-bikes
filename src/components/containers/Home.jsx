import React from 'react';
import Map from '@/components/map/Map';
import Spinner from '@/components/ui/spinner/Spinner';
import SegmentedUi from '@/components/ui/segmented-ui/SegmentedUi';
import { setFilter } from '@/redux/modules/stations/actions';
import { activeStations } from '@/redux/modules/stations/selectors';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const options = [
  {
    label: 'Available bikes',
    value: 'dock_bikes'
  },
  {
    label: 'Available bases',
    value: 'free_bases'
  }
];

const Home = ({ stations, loading, filter, setFilterAction }) => (
  <div>
    <Spinner loading={loading} />
    <Map markers={stations} filter={filter} />
    <div className="filters-content">
      <SegmentedUi
        options={options}
        value={filter}
        onChange={setFilterAction}
      />
    </div>
  </div>
);

Home.defaultProps = {
  stations: [],
  loading: false
};

Home.propTypes = {
  stations: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  filter: PropTypes.string.isRequired,
  setFilterAction: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  stations: activeStations(state),
  filter: state.stations.filter,
  loading: state.stations.loading
});

const mapDispatchToProps = {
  setFilterAction: setFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
