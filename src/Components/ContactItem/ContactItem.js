import React from 'react';
import PropTypes from 'prop-types';

import { v4 as uuidv4 } from 'uuid';
const ContactItem = ({ state, onDeleteItem }) => {
  return (
    <>
      {state.map(({ name, number, id }) => (
        <li key={uuidv4()}>
          <p>
            {name}: {number}
          </p>
          <button type="button" onClick={() => onDeleteItem(id)}>
            Удалить
          </button>
        </li>
      ))}
    </>
  );
};
export default ContactItem;

ContactItem.propTypes = {
  state: PropTypes.arrayOf(PropTypes.any).isRequired,
  onDeleteItem: PropTypes.func.isRequired,
};
