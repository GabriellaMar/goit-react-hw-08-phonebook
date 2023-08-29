
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk } from 'redux/operations';
import { selectFilteredContacts } from 'redux/selectors';
import { DeleteOutlined  } from '@ant-design/icons';
import { StyledContactItem, StyledContactList, StyledDeleteBtn } from './ContactList.styled';


export const ContactList = () => {
    const filteredContacts = useSelector(selectFilteredContacts);
    const dispatch = useDispatch();

    const handleDeleteContact = (contactId) => {
        dispatch(deleteContactThunk(contactId));
     }

    return (
            <StyledContactList >
                 {filteredContacts.length === 0 && <p>There are no contacts found!</p>}
                {filteredContacts.length > 0 && filteredContacts.map(contact => (
                    <StyledContactItem  key={contact.id}>
                        <div className='contactName'>{contact.name}:</div>
                           <div className='contact'> 
                    <div className='contactNumber'>{contact.number}</div>
                       
                    
                        <StyledDeleteBtn type="button" 
                            onClick={ () => handleDeleteContact(contact.id)}>
                            Delete
                            <DeleteOutlined className='deleteIcon' />
                            </StyledDeleteBtn> 
                              </div> 
                    </StyledContactItem>
                ))}

            </StyledContactList>
    )
}

