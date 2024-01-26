import { useState } from "react";
import { addNewPost } from "./postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "../user/usersSlice";
import styles from "./Posts.module.css";

const PostForm = () => {
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    userId: "",
  });
  const [addReqStatus, setAddReqStatus] = useState("idle");
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  const isDisabled =
    [newPost.content, newPost.title, newPost.userId].every(Boolean) &&
    addReqStatus === "idle";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isDisabled) {
      try {
        setAddReqStatus("pending");
        await dispatch(
          addNewPost({
            title: newPost.title,
            body: newPost.content,
            userId: newPost.userId,
          })
        ).unwrap();
        setNewPost({ title: "", content: "", userId: "" });
      } catch (error) {
        console.error(error.message);
      } finally {
        setAddReqStatus("idle");
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
        style={{ color: isDisabled ? "#fff" : "#000" }}
        disabled={!isDisabled}
        type="submit"
        value="add"
      />
    </form>
  );
};

export default PostForm;
