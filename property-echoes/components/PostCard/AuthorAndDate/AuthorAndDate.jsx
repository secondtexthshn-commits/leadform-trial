"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import "./_authoranddate.css";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";

const AuthorAndDateComponent = (post) => {
  const searchParams = useSearchParams();

  const { replace } = useRouter();
  const queryTerm = post?.post?.author?.name
    ? post.post.author.name.toLowerCase()
    : "";
  const formattedDate = new Date(post.post.createdAt).toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }
  );
  const handleSearchClick = (event) => {
    const params = new URLSearchParams();
    params.set("name", queryTerm);
    replace(`/author?${params.toString()}`);
  };

  const { slug } = post.post;
  if (slug === "loft-conversion-cost-calculator") {
    return null;
  }

  return (
    <section className="author-date-display-div">
      <div className="date-display-div">
        <FontAwesomeIcon icon={faCalendar} />
        <p className="date-div">{formattedDate}</p>
      </div>
    </section>
  );
};

const AuthorAndDate = (props) => {
  return (
    <Suspense>
      <AuthorAndDateComponent {...props} />
    </Suspense>
  );
};

export default AuthorAndDate;
