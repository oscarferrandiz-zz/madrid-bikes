import React from 'react';
import L from 'leaflet';
import { isEqual } from 'lodash';
import PropTypes from 'prop-types';
import redMarker from '@/assets/img/marker-red.png';
import greenMarker from '@/assets/img/marker-green.png';

const makeIcon = iconUrl => (
  L.icon({
    iconUrl,
    iconSize: [32, 32]
  })
);

const redIcon = makeIcon(redMarker);
const greenIcon = makeIcon(greenMarker);

export default class Map extends React.Component {

  /* Lifecycle */
  componentDidMount() {
    const { markers } = this.props;

    this.createMap();
    this.addMarkers(markers);
  }

  componentWillReceiveProps(nextProps) {
    const { markers } = nextProps;

    if (!isEqual(this.props.markers, markers)) {
      this.addMarkers(markers);
    }
  }

  /* Class methods */
  createMap() {
    const { BASEMAP_URL } = __env;

    this.map = L.map(this.node, {
      minZoom: 12,
      zoom: 14,
      center: [40.4188513, -3.7018343],
      detectRetina: true
    });

    this.map.zoomControl.setPosition('topright');

    L.tileLayer(BASEMAP_URL).addTo(this.map, {}).setZIndex(0);
  }

  addMarkers(markers) {
    markers.forEach((m) => {
      const icon = m.dock_bikes > 0 ? greenIcon : redIcon;
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
