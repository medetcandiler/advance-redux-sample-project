import { useState } from "react";
import { addPost, selectAllPosts } from "./postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

const PostForm = () => {
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
  });
  const posts = useSelector(selectAllPosts);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPost.title && newPost.title) {
      dispatch(addPost(newPost.title, newPost.content));
    }
    setNewPost({ title: "", content: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log(posts)

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">title</label>
      <input
        onChange={handleChange}
        value={newPost.title}
        name="title"
        type="text"
      />
      <br />
      <label htmlFor="content">content</label>
      <input
        onChange={handleChange}
        value={newPost.content}
        type="text"
        name="content"
      />
      <input type="submit" value="add" />
    </form>
  );
};

export default PostForm;
