import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import styles from "./Posts.module.css";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButton";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map((post) => (
    <article className={styles.post} key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <PostAuthor userId={post.userId} />
      <TimeAgo timeStamp={post.date} />
      <ReactionButtons post={post} />
    </article>
  ));

  return <div className={styles.container}>{renderedPosts}</div>;
};

export default PostsList;
