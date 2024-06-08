import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://665f84ac5425580055b00101.mockapi.io";


export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
    async ({ name, number }, thunkAPI) => {
       const state = thunkAPI.getState();
        const isExist = state.contacts.items.some(
          contact => contact.name.toLowerCase() === name.trim().toLowerCase()
        );
        if (isExist) {
            alert(`${name} is already in contacts!`);
            return ""
        } else {
            try {
                    const response = await axios.post("/contacts", { name, number, });
                    return response.data;
                } catch (e) {
                return thunkAPI.rejectWithValue(e.message);
            }
        }
    }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContacts",
    async (contactId, thunkAPI) => {
    try {
        const response = await axios.delete(`/contacts/${contactId}`);
      return response.data.id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


