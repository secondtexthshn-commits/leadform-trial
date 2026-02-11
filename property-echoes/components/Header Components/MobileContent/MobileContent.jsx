"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./_mobilecontent.css";

const categories = [
  { title: "Fitness", slug: "fitness" },
  { title: "Technology", slug: "technology" },
];

const MobileContent = ({ menuOpen, setMenuOpen }) => {
  const toggleSetup = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section className="mobile-content-div">
      <div>
        {menuOpen ? (
          <FontAwesomeIcon icon={faBars} onClick={toggleSetup} />
        ) : (
          <FontAwesomeIcon icon={faXmark} onClick={toggleSetup} />
        )}
      </div>
    </section>
  );
};

export default MobileContent;
