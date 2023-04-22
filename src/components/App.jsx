import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import React, { useState } from 'react';
import Notification from './Notification/Notification';
import options from 'data/options.json';

const App = () => {
  const step = 1;

  const [variants, setVariants] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = variants;

  const handleVote = type => {
    setVariants(prevState => ({
      ...prevState,
      [type]: prevState[type] + step,
    }));
  };

  const countTotalFeedback = () => {
    let total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() >= 1) {
      return ((good / countTotalFeedback()) * 100).toFixed(2);
    }
  };
 
  return (
    <div>
      <FeedbackOptions
        options={options}
        onLeaveFeedback={handleVote}
      ></FeedbackOptions>
      {countTotalFeedback() > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};

export default App;
