import React from "react";
import "./_categories.css";
import { getAllPosts } from "../../src/lib/jsonPosts";
import Link from "next/link";

export const Categories = async () => {
  const posts = getAllPosts();
  const categoryDetails = Array.from(
    new Map(
      posts.flatMap((p) => p.node.category).map((c) => [c.slug, c])
    ).values()
  );

  return (
    <section className="category-div">
      <div className="category-content-div">
        {categoryDetails.map((element) => (
          <Link href={`/category/${element.slug}/`} key={element.slug}>
            <p className="category-elements">
              {element.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
