import PropTypes from 'prop-types';
import TestCard from '../TestCard/TestCard.jsx';

export const TestCardList = ({
  filterCard: { answersQuantity, questionNumber },
  quests }) => {
  
  const finalQuests = quests.slice(0, +questionNumber);
  
  return (
    <>
        <h2>Cards List</h2>
        <ul>
            {finalQuests.map(quest => (
              <li key={quest.id}>
                <TestCard item={ quest } answersQuantity={answersQuantity} />
              </li>              
            ))}
        </ul>
    </>
    );
};

TestCardList.propTypes = {
  quests: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      question: PropTypes.string.isRequired
    })
  ).isRequired,
  filterCard: PropTypes.shape({
        answersQuantity: PropTypes.string.isRequired,        
        questionNumber: PropTypes.string.isRequired,
    }), 
};

export default TestCardList;