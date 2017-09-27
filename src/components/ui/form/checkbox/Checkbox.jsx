import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ label, id, ...props }) => (
  <div className="c-checkbox">
    <label htmlFor={id}>{label}</label>
    <input id={id} {...props} type="checkbox" />
  </div>
);

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default Checkbox;
