import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import styles from "./Posts.module.css";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  console.log(posts);

  const renderedPosts = posts.map((post) => (
    <article className={styles.post} key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </article>
  ));

  return <div className={styles.container}>{renderedPosts}</div>;
};

export default PostsList;
