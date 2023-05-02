import React, { useState } from "react";
import { useReducer } from "react";
import { reducer } from "./reducerFanc.js";

const booksData = [
  { id: 1, name: "English" },
  { id: 2, name: "Bangla" },
];
const inasialState = {
  books: booksData,
  isModelOpen: false,
  modelText: "",
};

export default function () {
  const [bookName, setBookName] = useState("");

  // Stap 01 // inesializ useReducer
  const [bookState, dispatch] = useReducer(reducer, inasialState);

  const handelSubmit = (e) => {
    e.preventDefault();
    setBookName("");
    const newBook = { id: Math.random(), name: bookName };
    // Stape 02
    dispatch({ type: "ADD", payload: newBook });
  };
  const removeBook = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  return (
    <div>
      <h3>Books List </h3>
      <form onSubmit={handelSubmit}>
        <input
          type={"text"}
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
        />
        <button type={"submit"}>ADD</button>
      </form>

      {bookState.isModelOpen && <p>{bookState.modelText} </p>}
      {bookState.books.map((e) => (
        <li key={e.id}>
          {e.name}
          <button onClick={() => removeBook(e.id)}>Remove</button>
        </li>
      ))}
    </div>
  );
}
