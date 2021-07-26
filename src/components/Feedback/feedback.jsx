import { Component } from 'react';
import { FeedbackSection } from './feedback.styled';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  HendleBtn = event => {
    const value = event.target.value;

    this.setState(prevState => ({
      [value]: prevState[value] + 1,
    }));
  };

  countTotalFeedback = () => {
    const stateValues = Object.values(this.state);
    const sum = stateValues.reduce((sum, item) => {
      return sum + item;
    }, 0);
    return sum;
  };

  countPositiveFeedbackPercentage = () => {
    const positiveFeedback =
      (100 / this.countTotalFeedback()) * this.state.good;
    return Math.round(positiveFeedback) + '%';
  };

  render() {
    return (
      <FeedbackSection>
        <Section title="Пожалуйста оставьте свой отзыв">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.HendleBtn}
          />
        </Section>

        <Section title="Статистика">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="Отзывы еще не собраны"></Notification>
          )}
        </Section>
      </FeedbackSection>
    );
  }
}
