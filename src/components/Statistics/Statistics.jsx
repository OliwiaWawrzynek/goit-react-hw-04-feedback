import React from 'react';
import propTypes from 'prop-types';
import css from './Statistics.module.css';
import Section from 'components/Section/Section';

export const Statistics = props => {
  return (
    <Section title="Statistics">
      <div className={css.container}>
        <p>Good: {props.good}</p>
        <p>Neutral: {props.neutral}</p>
        <p>Bad: {props.bad}</p>
        <p>Total: {props.total}</p>
        <p>Positive feedback: {props.positivePercentage}%</p>
      </div>
    </Section>
  );
};

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.string.isRequired,
};

export default Statistics;
