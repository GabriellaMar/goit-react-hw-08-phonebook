import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';




const instance = axios.create({
    baseURL: 'https://connections-api.herokuapp.com',
});

export const setToken = token => {
    instance.defaults.headers['Authorization'] = `Bearer ${token}`;
}

export const clearToken = () => {
    instance.defaults.headers['Authorization'] = '';
}


// body: {userName,userEmail, userPassword }
export const registerUserThunk = createAsyncThunk('auth/register', async (
    body, thunkApi) => {
    try {
        const { data } = await instance.post('/users/signup', body);
        setToken(data.token);
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
})


export const loginUserThunk = createAsyncThunk('auth/login', async (body, thunkApi) => {
    try {
        const { data } = await instance.post('/users/login', body)
        setToken(data.token);
        return data;

    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
})

export const refreshUserThunk = createAsyncThunk('auth/refresh', async (_, thunkApi) => {
    const state = thunkApi.getState();
    const token = state.auth.token;
    try {
        setToken(token)
        const { data } = await instance.get('/users/current');

        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
})

export const logOutUserThunk = createAsyncThunk('auth/logout', async (_, thunkApi) => {
    const { data } = await instance.post('/users/logout')
    clearToken();
    return data
})

//------Operations with Contacts------------
export const fetchContactsThunk = createAsyncThunk('contacts/fetchAllContacts',
    async (_, thunkApi) => {

        try {
            const { data } = await instance.get('/contacts');
            return data;

        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    })

export const addContactThunk = createAsyncThunk('contacts/addContact',
    async (contact, thunkApi) => {
        try {
            const { data } = await instance.post('/contacts', contact);
            return data;

        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    })

export const deleteContactThunk = createAsyncThunk('contacts/deleteContact',
    async (contactId, thunkApi) => {
        try {
            const { data } = await instance.delete(`/contacts/${contactId}`);
            return data;

        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    })