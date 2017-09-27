import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchStations } from '@/redux/modules/stations/actions';

class App extends React.Component {

  componentDidMount() {
    // Fetch data
    this.props.fetchStations();
    this.interval = window.setInterval(this.props.fetchStations, 60 * 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return (
      <main role="main" className="main">
        <div className="app-wrapper">
          {this.props.children}
        </div>
      </main>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired,
  fetchStations: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  fetchStations
};

export default connect(null, mapDispatchToProps)(App);
