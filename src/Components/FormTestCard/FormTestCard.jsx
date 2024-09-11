import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export const FormTestCard = ({ categories, selectedCategory, onChangeCategory }) => {
    return (
        <>
            <select value={selectedCategory} onChange={evt => onChangeCategory(evt.target.value)}>               
                    {categories.map(part => (
                        <option key={nanoid()} value={part}>
                            {part}
                        </option>
                    ))}                
            </select>
            <h1>FormTestCard</h1>            
        </>
    )
}

FormTestCard.propTypes = {
    categories: PropTypes.array.isRequired,
    selectedCategory: PropTypes.string.isRequired,
    onChangeCategory: PropTypes.func.isRequired,
};
