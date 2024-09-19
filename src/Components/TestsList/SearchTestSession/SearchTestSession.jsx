import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export const SearchTestSession = ({
    tests: { name, categoryType, answersQuantity, questionNumber },
    readyTests,
    categories,
    onChangeFilterSearch }) => {
    
    
    return (
        <>
            <h2>SearchFormTest</h2>
            <label htmlFor="name-select">Оберіть тему</label>
            <select
                id="name-select"
                value={name}
                onChange={evt => onChangeFilterSearch('name', evt.target.value)}>                
                {readyTests.map(readyTest => (                        
                        <option key={nanoid()} value={readyTest}>
                            {readyTest}
                        </option>
                    ))}                
            </select>
            <label htmlFor="category-select">Оберіть тему</label>
            <select
                id="category-select"
                value={categoryType}
                onChange={evt => onChangeFilterSearch('categoryType', evt.target.value)}>                
                {categories.map(category => (                        
                        <option key={nanoid()} value={category}>
                            {category}
                        </option>
                    ))}                
            </select>
            <label htmlFor="answers_quantity_select">Кількість варіантів відповідей</label>
            <select
                id="answers_quantity_select"
                value={answersQuantity}
                onChange={e => onChangeFilterSearch('answersQuantity', e.target.value)} >
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
            </select>
            <label htmlFor="question_number">Кількість питань</label>
            <input
                id='question_number'
                type='text' value={questionNumber}
                onChange={e => onChangeFilterSearch('questionNumber', e.target.value)} />
        </>
    )
};

SearchTestSession.propTypes = {
    tests: PropTypes.shape({
        name: PropTypes.string.isRequired,
        categoryType: PropTypes.string.isRequired,
        answersQuantity: PropTypes.string.isRequired,
        questionNumber: PropTypes.string.isRequired,
    }),
    categories: PropTypes.array.isRequired,
    readyTests: PropTypes.array.isRequired,
    onChangeFilterSearch: PropTypes.func.isRequired,
};
