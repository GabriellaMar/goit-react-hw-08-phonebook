 import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.contacts.items;
export const selectFilter = state => state.filter.filter
export const selectUserLoading = state => state.auth.isLoading;
export const selectIsLoading = state => state.contacts.contacts.isLoading
export const selectUserError = state => state.auth.error;
export const selectContactsError = state => state.contacts.contacts.error
export const selectToken = state => state.auth.token;
export const selectUser = state => state.auth.user;
export const selectRegistrated = state => state.auth.registrated;


export const selectFilteredContacts = createSelector(
    [
        selectFilter, 
        selectContacts, 
      ], 
       (filter, filteredContacts)=>{
        return filteredContacts.filter(
            (contact) => contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
          ) 
      }
)
