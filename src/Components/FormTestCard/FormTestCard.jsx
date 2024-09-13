import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export const FormTestCard = ({
    filterCard: { categoryType, answersQuantity, questionNumber },
    categories,    
    onChangefilterCard }) => {
    return (
        <>
            <h2>FormTestCard</h2>
            <label htmlFor="category-select">Оберіть тему</label>
            <select
                id="category-select"
                value={categoryType}
                onChange={evt => onChangefilterCard('categoryType', evt.target.value)}>                
                {categories.map(part => (                        
                        <option key={nanoid()} value={part}>
                            {part}
                        </option>
                    ))}                
            </select>
            <label htmlFor="answers_quantity_select">Кількість варіантів відповідей</label>
            <select
                id="answers_quantity_select"
                value={answersQuantity}
                onChange={e => onChangefilterCard('answersQuantity', e.target.value)} >
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='6'>6</option>
            </select>
            <label htmlFor="question_number">Кількість варіантів відповідей не більше 20ти</label>
            <input
                id='question_number'
                type='text' value={questionNumber}
                onChange={e => onChangefilterCard('questionNumber', e.target.value)} />
        </>
    )
}

FormTestCard.propTypes = {
    filterCard: PropTypes.shape({
        categoryType: PropTypes.string.isRequired,
        answersQuantity: PropTypes.string.isRequired,
        questionNumber: PropTypes.string.isRequired,
    }),   
    categories: PropTypes.array.isRequired,    
    onChangefilterCard: PropTypes.func.isRequired,
};
