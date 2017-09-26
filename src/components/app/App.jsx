import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchStations } from '@/redux/modules/stations/actions';

class App extends React.Component {

  componentDidMount() {
    // Fetch data
    this.props.fetchStations();
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
