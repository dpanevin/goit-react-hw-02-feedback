import { Component } from 'react';
import { StatsItem } from '../feedback.styled';

export class Statistics extends Component {
  render() {
    return (
      <ul>
        <StatsItem>Хорошо: {this.props.good}</StatsItem>
        <StatsItem>Нормально: {this.props.neutral}</StatsItem>
        <StatsItem>Плохо: {this.props.bad}</StatsItem>
        <StatsItem>Всего отзывов: {this.props.total}</StatsItem>
        <StatsItem>
          Позитивных отзывов: {this.props.positivePercentage}
        </StatsItem>
      </ul>
    );
  }
}
