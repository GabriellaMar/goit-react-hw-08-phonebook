// import styles from './Filter.module.css'
import PropTypes from 'prop-types';
import { setFilter } from 'redux/slice.js/filterSlice';
import { useDispatch } from 'react-redux';
import { SearchOutlined } from '@ant-design/icons';
import { StyledFilterContainer, StyledFilterInput, StyledFilterTittle } from './Filter.styled';

export const Filter = ({ filter }) => {
    const dispatch = useDispatch();
    const handleFilterChange = (e) => {
        const { value } = e.target
        dispatch(setFilter(value))
    }
    return (
        < >
            <StyledFilterTittle>Find contacts by name</StyledFilterTittle>
            <StyledFilterContainer >
            <span className='filterIcon'><SearchOutlined /></span>
            <StyledFilterInput 
            
                type="text"
                name="filter"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={filter}
                onChange={handleFilterChange}
            />
            </StyledFilterContainer>
        </>
    )
}

 Filter.propTypes = {
filter: PropTypes.string.isRequired,
 }