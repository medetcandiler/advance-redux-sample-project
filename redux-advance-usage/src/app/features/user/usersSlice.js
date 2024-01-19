import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: 'medet' },
  { id: 2, name: 'mia' },
  { id: 3, name: 'aybis' }
];

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {

  }
})

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;