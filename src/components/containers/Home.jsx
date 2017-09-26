import React from 'react';
import Map from '@/components/map/Map';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Home({ stations }) {
  return (
    <div>
      <Map markers={stations} />
    </div>
  );
}

Home.defaultProps = {
  stations: []
};

Home.propTypes = {
  stations: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = ({ stations }) => ({
  stations: stations.list
});

export default connect(mapStateToProps, null)(Home);
