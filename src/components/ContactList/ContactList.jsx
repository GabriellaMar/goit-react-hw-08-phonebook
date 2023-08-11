import styles from './ContactList.module.css'
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk } from 'redux/operations';
import { selectFilteredContacts } from 'redux/selectors';
import { DeleteOutlined  } from '@ant-design/icons';


export const ContactList = () => {
    const filteredContacts = useSelector(selectFilteredContacts);
    const dispatch = useDispatch();

    const handleDeleteContact = (contactId) => {
        dispatch(deleteContactThunk(contactId));
     }

    return (
            <ul className={styles.contactList}>
                 {filteredContacts.length === 0 && <p>There are no contacts found!</p>}
                {filteredContacts.length > 0 && filteredContacts.map(contact => (
                    <li className={styles.contactItem} key={contact.id}>
                        <div className={styles.contactName}>{contact.name}:</div>
                           <div className={styles.contact}> 
                    <div className={styles.contactNumber}>{contact.number}</div>
                       
                    
                        <button type="button" className={styles.deleteContactBtn}
                            onClick={ () => handleDeleteContact(contact.id)}>
                            Delete
                            <DeleteOutlined className={styles.deleteIcon} />
                            </button> 
                              </div> 
                    </li>
                ))}

            </ul>
    )
}

