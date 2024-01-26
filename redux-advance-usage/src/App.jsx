import './index.css'
import PostsList from "./app/features/post/PostLists";
import PostForm from "./app/features/post/PostForm";

function App() {
  return (
    <main>
      <PostForm />
      <h3 className='title'>POSTS</h3>
      <PostsList />
    </main>
  );
}

export default App;
