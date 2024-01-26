import { useSelector, useDispatch } from "react-redux";
import {
  selectAllUsers,
  getUsersError,
  getUsersStatus,
  fetchUsers,
} from "../user/usersSlice";
import { useEffect } from "react";

const PostAuthor = ({ userId }) => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);
  const usersStatus = useSelector(selectAllUsers);
  const error = useSelector(selectAllUsers);

  console.log(users, 'users')

  useEffect(() => {
    if (usersStatus === "idle") {
      dispatch(fetchUsers());
    }
  }, [usersStatus, dispatch]);

  const author = users.find((user) => user.id == userId);
  return <span>by {author ? author.name : "unknown author"}</span>;
};

export default PostAuthor;
