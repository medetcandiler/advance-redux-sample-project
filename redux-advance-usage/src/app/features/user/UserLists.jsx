import { useSelector } from "react-redux";

const UserLists = () => {
  const users = useSelector(state => state.users);
  console.log(users)
  
  return <div>
    <h1>

    </h1>
  </div>;
};

export default UserLists;