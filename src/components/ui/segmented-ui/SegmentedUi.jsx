import React from 'react';
import PropTypes from 'prop-types';
import cnames from 'classnames';

const SegmentedUi = ({ options, value, onChange }) => (
  <div className="c-segmented-ui">
    <ul className="segmented-ui-list">
      {options.map(o => (
        <li key={o.value} className={cnames('segmented-ui-item', { '-active': o.value === value })}>
          <button
            type="button"
            className="segmented-ui-btn"
            onClick={() => onChange(o.value)}
          >
            {o.label}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

SegmentedUi.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SegmentedUi;
