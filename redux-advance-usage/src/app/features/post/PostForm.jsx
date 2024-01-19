import { useState } from "react";
import { addPost } from "./postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "../user/usersSlice";
import styles from "./Posts.module.css";

const PostForm = () => {
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    userId: "",
  });
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPost.title && newPost.title && newPost.userId) {
      dispatch(addPost(newPost.title, newPost.content, newPost.userId));
    } else {
      alert("all fields have to be filled");
    }
    setNewPost({ title: "", content: "", userId: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isDisabled = !(newPost.title && newPost.content && newPost.userId)

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <label htmlFor="title">title</label>
      <input
        id="title"
        onChange={handleChange}
        value={newPost.title}
        name="title"
        type="text"
      />
      <label htmlFor="content">content</label>
      <input
        id="content"
        onChange={handleChange}
        value={newPost.content}
        type="text"
        name="content"
      />
      <select
        onChange={handleChange}
        value={newPost.userId}
        name="userId"
        id="userId"
      >
        <option value=""></option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      <input
        style={{color: isDisabled ? '#fff' : '#000'}}
        disabled={isDisabled}
        type="submit"
        value="add"
      />
    </form>
  );
};

export default PostForm;
