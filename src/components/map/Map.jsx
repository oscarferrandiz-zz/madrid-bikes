import React from 'react';
import L from 'leaflet';
import { isEqual } from 'lodash';
import PropTypes from 'prop-types';
import personMarker from '@/assets/img/marker-person.png';

const makeIcon = (num) => {

  let mod = 'calm';

  if (num <= 2) mod = 'danger';
  else if (num <= 5) mod = 'warning';

  return L.divIcon({
    iconSize: [32, 32],
    className: `station-marker -${mod}`,
    html: `<span>${num}</span>`
  });
};
const personIcon = L.icon({ iconUrl: personMarker, iconSize: [32, 32] });

const getTooltip = (data) => {
  const tooltip = L.DomUtil.create('div', 'infoWindow');

  tooltip.innerHTML = `
    <div class="c-tooltip">
      <span class="tooltip__title">${data.address}</span>
      <span>Available bases: ${data.free_bases}</span>
      <span>Available bikes: ${data.dock_bikes}</span>
    </div>
  `;

  return tooltip;
};

export default class Map extends React.Component {

  constructor(props) {
    super(props);
    this.markers = [];
  }

  /* Lifecycle */
  componentDidMount() {
    const { markers } = this.props;

    this.createMap();
    this.addMarkers(markers);
    this.centerOnUserLocation();
  }

  componentWillReceiveProps(nextProps) {
    const { markers, filter } = nextProps;

    if ((this.props.filter !== filter) || !isEqual(this.props.markers, markers)) {
      this.removeAllMarkers();
      this.addMarkers(markers, filter);
    }
  }

  /* Class methods */
  createMap() {
    const { BASEMAP_URL } = __ENV__;

    this.map = L.map(this.node, {
      minZoom: 12,
      zoom: 14,
      center: [40.4188513, -3.7018343],
      detectRetina: true
    });

    this.map.zoomControl.setPosition('topright');

    L.tileLayer(BASEMAP_URL).addTo(this.map, {}).setZIndex(0);
  }

  addMarkers(markers, filter) {
    markers.forEach((m) => {
      const marker = L.marker([m.latitude, m.longitude], { icon: makeIcon(m[filter]) });
      marker.addTo(this.map);
      marker.bindPopup(getTooltip(m));
      this.markers.push(marker);
    });
  }

  removeAllMarkers() {
    this.markers.forEach((marker) => {
      this.map.removeLayer(marker);
    });
  }

  centerOnUserLocation() {
    const { navigator } = window;

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        L.marker([coords.latitude, coords.longitude], { icon: personIcon, zIndexOffset: 99999 })
        .addTo(this.map);

        this.map.setView([coords.latitude, coords.longitude], 16);
      });
    }
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

Map.propTypes = {
  markers: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired
};
