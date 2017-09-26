import React from 'react';
import L from 'leaflet';
import PropTypes from 'prop-types';
import markerIcon from '@/assets/img/marker.png';

const icon = L.icon({
  iconUrl: markerIcon,
  iconSize: [32, 32]
});

export default class Map extends React.Component {

  /* Lifecycle */
  componentDidMount() {
    const { BASEMAP_URL } = __env;

    this.map = L.map(this.node, {
      minZoom: 12,
      zoom: 12,
      center: [40.4188513, -3.7018343],
      detectRetina: true
    });

    this.map.zoomControl.setPosition('topright');

    L.tileLayer(BASEMAP_URL).addTo(this.map, {}).setZIndex(0);
  }

  componentWillReceiveProps(nextProps) {
    const { markers } = nextProps;

    markers.forEach((m) => {
      L.marker([m.latitude, m.longitude], { icon }).addTo(this.map);
    });
  }

  /* Render */
  render() {
    return (
      <div
        className="c-map"
        ref={(n) => { this.node = n; }}
      />
    );
  }
}

Map.defaultProps = {
  markers: []
};

Map.propTypes = {
  markers: PropTypes.arrayOf(PropTypes.object)
};
