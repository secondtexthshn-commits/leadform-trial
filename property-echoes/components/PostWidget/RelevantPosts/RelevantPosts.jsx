import React from "react";
import "./_relevantposts.css";
import Link from "next/link";

const RelevantPosts = ({ similarPosts, slug, postSlug }) => {
  console.log(similarPosts);
  console.log("slug:", slug);
  console.log("post slug:", postSlug);
  // Filter posts where the category slug matches the provided slug
  const filteredPosts = similarPosts.filter(
    (post) =>
      post.node.category.some((category) => category.slug === slug) &&
      post.node.slug !== postSlug
  );

  console.log("Filtered Posts:", filteredPosts);

  return (
    <div>
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post, index) => (
          <Link href={`/${post.node.category[0].slug}/${post.node.slug}`}>
            <div className="relevant-posts-div" key={index}>
              <p>{post.node.category?.[0]?.name || "Uncategorized"}</p>
              <h3>{post.node.title}</h3>
              {/* Render other post details as needed */}
            </div>
          </Link>
        ))
      ) : (
        <p>No relevant posts found.</p>
      )}
    </div>
  );
};

export default RelevantPosts;
