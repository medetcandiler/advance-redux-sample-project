import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButton";

const PostExcerpt = ({ post }) => {
  return (
    <article className={styles.post}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <PostAuthor userId={post.userId} />
      <TimeAgo timeStamp={post.date} />
      <ReactionButtons post={post} />
    </article>
  );
};

export default PostExcerpt;
