import css from './FeedbackOptions.module.css';
import React from 'react';
import propTypes from 'prop-types';
import Section from 'components/Section/Section';

const FeedbackOptions = props => {
  return (
    <Section title="Please leave feedback">
      <div className={css.container}>
        {props.options.map(option => (
          <button
            key={option.id}
            label={option.label.toLowerCase()}
            onClick={props.onLeaveFeedback}
            type="button"
            className={css.button}>
            {option.label}
          </button>
        ))}
      </div>
    </Section>
  );
};

FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(
    propTypes.shape({
      key: propTypes.string,
      label: propTypes.string.isRequired,
    })
  ),
  onClick: propTypes.func,
};

export default FeedbackOptions;

