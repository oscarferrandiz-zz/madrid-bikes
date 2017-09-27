import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@/components/ui/form/checkbox/Checkbox';
import { setFilter } from '@/redux/modules/stations/actions';
import { Autobind } from 'es-decorators';
import { connect } from 'react-redux';

class Filters extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  @Autobind
  onFilterChange(evt) {
    this.props.setFilter({
      name: evt.target.id,
      value: evt.target.checked
    });
  }

  render() {
    return (
      <section className="c-filters">
        <h1 className="filters__title">Filters</h1>
        <Checkbox
          id="free_bases"
          label="Free bases"
          onChange={this.onFilterChange}
          checked={this.props.filters.free_bases}
        />
        <Checkbox
          id="dock_bikes"
          label="Available bikes"
          onChange={this.onFilterChange}
          checked={this.props.filters.dock_bikes}
        />
      </section>
    );
  }
}

Filters.propTypes = {
  setFilter: PropTypes.func.isRequired,
  filters: PropTypes.object.isRequired
};

const mapStateToProps = ({ stations }) => ({
  filters: stations.filters
});

const mapDispatchToProps = {
  setFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
