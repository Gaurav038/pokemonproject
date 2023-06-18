import React, { createContext, useEffect, useReducer, useState } from "react";

export const BookmarkContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };

    case "add Data":
      return { allData: action.payload.bookmarks, loading: false };
  }

  return state;
};

export const BookmarkProvider = ({ children }) => {
  const initialState = {
    allData: JSON.parse(localStorage.getItem("bookmarks")) || [],
    loading: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const addData = (title, img) => {
    dispatch({ type: "LOADING" });

    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    const bookmarkIndex = bookmarks.findIndex((bookmark) => bookmark.title === title);

    if (bookmarkIndex !== -1) {
      bookmarks.splice(bookmarkIndex, 1); // Remove bookmark if it already exists
    } else {
      bookmarks.push({ title, img }); // Add bookmark if it doesn't exist
    }

    dispatch({ type: "add Data", payload: {bookmarks: bookmarks} });

    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  };

  return(
    <BookmarkContext.Provider
        value={{
            ...state,
            addData
        }}
    >
        {children}
    </BookmarkContext.Provider>
  )
};
