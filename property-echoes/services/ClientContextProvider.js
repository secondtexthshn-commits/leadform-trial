"use client";

import React, { useState, useEffect } from "react";

// Create a Context
const MyContext = React.createContext();

// Create the Provider Component
export const ClientContextProvider = ({ children }) => {
  const [postsFetched, setPostsFetched] = useState([]);

  // Fetch data asynchronously from our local API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/posts.json");
        const data = await response.json();
        setPostsFetched(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <MyContext.Provider value={{ postsFetched }}>{children}</MyContext.Provider>
  );
};

export default MyContext;
