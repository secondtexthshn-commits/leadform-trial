import React from "react";
import "./_recentposts.css";
import Link from "next/link";

const RecentPosts = ({ latestPosts }) => {
  console.log(latestPosts, "latest");

  // Ensure postsToShow is an array, or default to an empty array
  const postsToShow =
    Array.isArray(latestPosts) && latestPosts.length > 0 ? latestPosts : [];

  return (
    <section>
      {postsToShow.slice(0, 5).map((post) => (
        <Link href={`/${post.node.category[0].slug}/${post.node.slug}`}>
          <div
            key={post.node.id || post.node.title}
            className="recent-posts-div"
          >
            <p>{post.node.category?.[0]?.name || "Uncategorized"}</p>
            <h3>{post.node.title}</h3>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default RecentPosts;
