import React from 'react';
import Map from '@/components/map/Map';
import Spinner from '@/components/ui/spinner/Spinner';
import SegmentedUi from '@/components/ui/segmented-ui/SegmentedUi';
import { setFilter } from '@/redux/modules/stations/actions';
import { stationsSelector } from '@/redux/modules/stations/selectors';
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

const Home = ({ stations, loading, filter, setFilter }) => {
  const onChange = val => setFilter(val);
  return (
    <div>
      <Spinner loading={loading} />
      <Map markers={stations} filter={filter} />
      <SegmentedUi
        options={options}
        value={filter}
        onChange={onChange}
      />
    </div>
  );
};

Home.defaultProps = {
  stations: [],
  loading: false
};

Home.propTypes = {
  stations: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired
};

const mapStateToProps = ({ stations }) => ({
  stations: stationsSelector(stations.list),
  filter: stations.filter,
  loading: stations.loading
});

const mapDispatchToProps = {
  setFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
