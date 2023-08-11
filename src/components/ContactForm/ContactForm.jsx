import React from 'react';
import { useState } from "react";
// import PropTypes from 'prop-types';
import styles from './ContactForm.module.css'
import { useDispatch, useSelector } from "react-redux";
import { addContactThunk } from "redux/operations";
import { selectFilteredContacts } from "redux/selectors";

import { UserOutlined, PhoneOutlined } from '@ant-design/icons';


export const ContactForm = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        return
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = { name, number };
    const isExist = filteredContacts.find(contact => contact.name === name);

    if (isExist) {
      alert(`${name} is already in contacts.`);
      setName('');
      setNumber('');
      return;
    }

    dispatch(addContactThunk(contact));
    setName('');
    setNumber('');
  }

  return <>
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <label className={styles.formLabel}>
        Name
      <UserOutlined  className={styles.iconPhone} />
        <input className={styles.formInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter your name"
          value={name}
          onChange={handleChange}
        />
      </label>
      <label className={styles.formLabel}>
        Number
        <PhoneOutlined  className={styles.iconPhone} />
        <input className={styles.formInput}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter your number"
          value={number}
          onChange={handleChange}
        />
      </label>
      <button className={styles.formAddBtn} type="submit">Add contact </button>
    </form>
  </>
}

