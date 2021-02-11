import React, { createContext, useState } from "react";

export const commentsContext = createContext();

export default function CommentsProvider({ children }) {
  let [comments, setComments] = useState([]);

  return (
    <commentsContext.Provider value={{ comments, setComments }}>
      {children}
    </commentsContext.Provider>
  );
}
