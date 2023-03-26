import css from './Section.module.css';
import propTypes from 'prop-types';
import React from 'react';

const Section = props => {
  return (
    <div className={css.section}>
      <h1 className={css.title}>{props.title}</h1>
      {props.children}
    </div>
  );
};

Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};

export default Section;
