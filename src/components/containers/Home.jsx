import React from 'react';
import Map from '@/components/map/Map';
import OffCanvas from '@/components/ui/off-canvas/OffCanvas';
import Spinner from '@/components/ui/spinner/Spinner';
import Filters from '@/components/filters/Filters';
import { stationsSelector } from '@/redux/modules/stations/selectors';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Home({ stations, loading }) {
  return (
    <div>
      <OffCanvas>
        <Filters />
      </OffCanvas>
      <Spinner loading={loading} />
      <Map markers={stations} />
    </div>
  );
}

Home.defaultProps = {
  stations: [],
  loading: false
};

Home.propTypes = {
  stations: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool
};

const mapStateToProps = ({ stations }) => ({
  stations: stationsSelector(stations.list, stations.filter),
  loading: stations.loading
});

export default connect(mapStateToProps, null)(Home);
