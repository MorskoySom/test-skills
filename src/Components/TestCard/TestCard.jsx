import PropTypes from 'prop-types';

export const TestCard = (
  { item: { question, options, correctAnswer },
    answersQuantity }) => {
  
  const finalOptions = options.slice(0, +answersQuantity - 1);    
  const randomIndex = Math.floor(Math.random() * (+answersQuantity));
  finalOptions.splice(randomIndex, 0, correctAnswer);  

  return (
    <div>
      <h4>{question}</h4>
      <div>
        {finalOptions.map((option, index) => (
          <div key={index}>{option}</div>
        ))}
      </div>
          <h3>{ correctAnswer }</h3>
    </div>
  );
};

TestCard.propTypes = {
  item: PropTypes.shape({
      question: PropTypes.string.isRequired,
      correctAnswer: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  answersQuantity: PropTypes.string.isRequired,
};

export default TestCard;

