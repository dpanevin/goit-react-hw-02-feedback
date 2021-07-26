import { Component } from 'react';
import { BtnWrapper, FeedbackBtn } from 'components/Feedback/feedback.styled';

export class FeedbackOptions extends Component {
  render() {
    return (
      <BtnWrapper>
        {this.props.options.map(item => {
          return (
            <FeedbackBtn
              type="button"
              value={item}
              onClick={this.props.onLeaveFeedback}
              key={item}
            >
              {item}
            </FeedbackBtn>
          );
        })}
      </BtnWrapper>
    );
  }
}
