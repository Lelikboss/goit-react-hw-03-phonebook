import React from 'react';
import s from './MainContainer.module.css';
const MainContainer = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};
export default MainContainer;
