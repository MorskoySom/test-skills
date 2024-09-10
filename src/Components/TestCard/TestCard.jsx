import PropTypes from 'prop-types';

export const TestCard = ({ item : {question, options, correctAnswer }}) => {
  return (
    <div>
      <div>{question}</div>
      <div>
        {options.map((option, index) => (
          <div key={index}>{option}</div>
        ))}
      </div>
          <h2>{ correctAnswer }</h2>
    </div>
  );
};

TestCard.propTypes = {
  item: PropTypes.shape({
      question: PropTypes.string.isRequired,
      correctAnswer: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default TestCard;