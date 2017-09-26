import React from 'react';
import L from 'leaflet';

export default class Map extends React.Component {

  componentDidMount() {
    this.map = L.map(this.node);
  }

  render() {
    return (
      <div
        className="c-map"
        ref={(n) => { this.node = n; }}
      />
    );
  }
}
