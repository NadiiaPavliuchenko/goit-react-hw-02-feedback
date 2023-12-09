import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  width: 80px;
  height: 30px;
  font-size: 16px;
  background-color: white;
  border: 1px solad gray;
  border-radius: 5px;
  &:hover {
    box-shadow: 2px 2px 3px 1px rgba(128, 128, 128, 1);
  }
`;

const FeedbackOptions = props => {
  return (
    <Div>
      {props.options.map((option, index) => {
        return (
          <Button
            type="button"
            key={index}
            value={option}
            onClick={props.onLeaveFeedback}
          >
            {option}
          </Button>
        );
      })}
    </Div>
  );
};

export default FeedbackOptions;
