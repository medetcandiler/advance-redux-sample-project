import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, username: 'medet' },
  { id: 2, username: 'mia' }
];

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {

  }
})


export default usersSlice.reducer