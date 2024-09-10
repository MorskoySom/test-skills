import PropTypes from 'prop-types';
import TestCard from '../TestCard/TestCard.jsx';

export const TestCardList = ({ quests }) => {
    return (
        <ul>
            {quests.map(quest => (
              <li key={quest.id}>
                <TestCard item={ quest } />
              </li>              
            ))}
        </ul>
    );
};

TestCardList.propTypes = {
  quests: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      question: PropTypes.string.isRequired
    })
  ).isRequired,
};

export default TestCardList;