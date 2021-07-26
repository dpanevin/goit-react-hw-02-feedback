import styled from '@emotion/styled/macro';

export const FeedbackSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  margin: auto;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const FeedbackBtn = styled.button`
  width: 100px;
  height: 30px;
  background-color: rgba(0, 0, 255, 0.1);
  border: none;
  cursor: pointer;
  color: white;
  text-transform: capitalize;

  &:not(:last-child) {
    margin-right: 15px;
  }
`;

export const StatsItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
