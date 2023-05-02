// stape 03
export const reducer = (state, action) => {
  if (action.type === "ADD") {
    const allBooks = [...state.books, action.payload];
    const newData = {
      ...state,
      books: allBooks,
      isModelOpen: true,
      modelText: "Book is added",
    };
    return newData;
  }
  if (action.type === "REMOVE") {
    const filertedBooks = [...state.books].filter(
      (books) => books.id !== action.payload
    );
    return {
      ...state,
      books: filertedBooks,
      isModelOpen: true,
      modelText: "Book is Remove",
    };
  }
  return state;
};
