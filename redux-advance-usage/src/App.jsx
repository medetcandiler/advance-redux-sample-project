import './index.css'
import PostsList from "./app/features/post/PostLists";
import PostForm from "./app/features/post/PostForm";
import UserLists from './app/features/user/UserLists';

function App() {
  return (
    <main>
      <PostForm />
      <h3 className='title'>POSTS</h3>
      <PostsList />
      <UserLists />
    </main>
  );
}

export default App;
