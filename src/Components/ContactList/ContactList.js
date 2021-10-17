import React from 'react';
import PropTypes from 'prop-types';

import s from './ContactList.module.css';

const ContactList = ({ children }) => {
  return <ul className={s.list}>{children}</ul>;
};
export default ContactList;

ContactList.propTypes = {
  children: PropTypes.any.isRequired,
};
