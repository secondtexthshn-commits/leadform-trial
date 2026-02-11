import React from "react";
import "./_postwidget.css";
import RecentPosts from "./RecentPosts/RecentPosts";
import RelevantPosts from "./RelevantPosts/RelevantPosts";

const PostWidget = ({ recentPosts, relatedPosts, slug, postSlug }) => {
  console.log("recentposts:", recentPosts);
  console.log("relatedposts:", relatedPosts);

  const title = recentPosts ? "LATEST POSTS" : "SIMILAR POSTS";
  return (
    <section className="post-widget-div ">
      <h2 className="post-widget-content-div">{title}</h2>
      {recentPosts ? (
        <RecentPosts latestPosts={recentPosts} />
      ) : (
        <RelevantPosts
          similarPosts={relatedPosts}
          slug={slug}
          postSlug={postSlug}
        />
      )}
    </section>
  );
};

export default PostWidget;
