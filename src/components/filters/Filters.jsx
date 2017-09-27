import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@/components/ui/form/checkbox/Checkbox';
import { setFilter } from '@/redux/modules/stations/actions';
import { Autobind } from 'es-decorators';
import { connect } from 'react-redux';

const filterItems = [
  {
    label: 'Available bikes',
    value: 'dock_bikes'
  },
  {
    label: 'Available docks',
    value: 'free_docks'
  }
];

class Filters extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  @Autobind
  onFilterChange(evt) {
    this.props.setFilter(evt.target.id);
  }

  render() {
    return (
      <section className="c-filters">
        <h1 className="filters__title">Filters</h1>
        <Checkbox
          id="all"
          label="All"
          onChange={this.onFilterChange}
          checked={this.props.filter === 'all'}
        />
        <Checkbox
          id="dock_bikes"
          label="Available bikes"
          onChange={this.onFilterChange}
          checked={this.props.filter === 'dock_bikes'}
        />
        <Checkbox
          id="free_bases"
          label="Free bases"
          onChange={this.onFilterChange}
          checked={this.props.filter === 'free_bases'}
        />
      </section>
    );
  }
}

Filters.propTypes = {
  setFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired
};

const mapStateToProps = ({ stations }) => ({
  filter: stations.filter
});

const mapDispatchToProps = {
  setFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
