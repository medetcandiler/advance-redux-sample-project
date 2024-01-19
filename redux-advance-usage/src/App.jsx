import PostsList from "./app/features/post/PostLists";
import PostForm from "./app/features/post/PostForm";

function App() {
  return (
    <main>
      <h3>POSTS</h3>
      <PostForm />
      <PostsList />
    </main>
  );
}

export default App;
