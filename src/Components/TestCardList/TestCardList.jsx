import PropTypes from 'prop-types';
import TestCard from '../TestCard/TestCard.jsx';

export const TestCardList = ({ quests, answersQuantity }) => {
  return (
    <>
        <h2>Cards List</h2>
        <ul>
            {quests.map(quest => (
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
  answersQuantity: PropTypes.string.isRequired,
};

export default TestCardList;