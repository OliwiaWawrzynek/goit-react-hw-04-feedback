import propTypes from 'prop-types';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import React, { Component } from 'react';
import Notification from './Notification/Notification';
import options from 'data/options.json';

export class App extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  static propTypes = {};

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  handleClick = e => {
    const label = e.target.innerText.toLowerCase();
    if (label === 'good') {
      this.setState((state, props) => ({
        good: state.good + props.step,
      }));
    } else if (label === 'neutral') {
      this.setState((state, props) => ({
        neutral: state.neutral + props.step,
      }));
    } else if (label === 'bad') {
      this.setState((state, props) => ({
        bad: state.bad + props.step,
      }));
    }
  };

  countTotalFeedback = () => {
    let total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    let positivePercentage = 0;
    if (this.countTotalFeedback() >= 1) {
      positivePercentage = (
        (this.state.good / this.countTotalFeedback()) *
        100
      ).toFixed(2);
    }
    return positivePercentage;
  };

  render() {
    return (
      <div>
        <FeedbackOptions
          options={options}
            onLeaveFeedback={this.handleClick}>
          </FeedbackOptions>
        {this.countTotalFeedback() > 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}

App.propTypes = {
  step: propTypes.number.isRequired,
  initialValue: propTypes.number.isRequired,
};

export default App;
