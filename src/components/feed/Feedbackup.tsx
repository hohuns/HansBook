import { useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";

const Feed = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    console.log("Feed rendered");
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {/* {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))} */}
      </div>
    </div>
  );
};

export default Feed;
