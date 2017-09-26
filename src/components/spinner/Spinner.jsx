import React from 'react';
import PropTypes from 'prop-types';

const Spinner = ({ loading }) => (
  <div className="c-spinner">
    {loading && <div className="spinner-box" />}
  </div>
);

Spinner.defaultProps = {
  loading: false
};

Spinner.propTypes = {
  loading: PropTypes.bool
};

export default Spinner;
