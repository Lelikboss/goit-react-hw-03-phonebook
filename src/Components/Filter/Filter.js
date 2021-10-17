import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';
const Filter = ({ value, onChange }) => {
  return (
    <>
      <div className={s.find}>
        <p>Find contacts by name</p>
        <input type="text" value={value} onChange={onChange} />
      </div>
    </>
  );
};
export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
