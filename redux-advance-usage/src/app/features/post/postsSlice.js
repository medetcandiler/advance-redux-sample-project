import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, title: 'title 1', content: 'content 1' },
  { id: 2, title: 'title 2', content: 'content 2' },
  { id: 3, title: 'title 3', content: 'content 3' },
]

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        return [...state, action.payload]
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content
          }
        }
      }
    }
  }
})

export const selectAllPosts = (state) => state.posts;
export const { addPost } = postsSlice.actions
export default postsSlice.reducer 