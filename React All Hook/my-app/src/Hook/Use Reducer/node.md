# const inasialState = {books: booksData,isModelOpen: false,modelText: ""};

<!-- Stap 01 -->

# const [state, dispatch] = useReducer(reducer, inasialState);

1. ey kane useReducer er mudde =>
   reducer: eti ekti function. eyti molotu somosto action goloke handel kure.
   inasialState: eykane molotu somosto state golo object akare takbe.
2. [state, dispatch] =>
   state: somostu satate golo eykane object akare store takbe
   dispatch : eti akti mathod, eytar dara reducer fanction ke action and data patano huy, Stape 02 te ar somporke aro valo kure janano huyece

<!-- Stape 02 -->

# dispatch({ type: "ADD", payload: newData });

1. dispatch({})
   type: eyr maddome amra action ar typeta bule dibo, reducer fanction e jukon action ti jabe , tokon amra seta if ar maddome chack kure bebohar kurbo
   payload: noton kono data set kurer junno judi paytar maddome pata te huy.

<!-- stape 03 -->

<script>
export const reducer = (state, action) => {
  if (action.type === "ADD") {
    const allBooks = [...state.books, action.payload];
    return {
      ...state,
      books: allBooks,
      isModelOpen: true,
      modelText: "Book is added",
    };
  }
  return state;
};
<script/>

1. state and action =>
   state: eykane molotu ager somosto state golo pawya jay
   action: eymodde 2ta data pay, 1.action.type(dispach teke patano type ta eykane pay),2.action.payload(dispach teke payload er maddome patano data ta ey kane paowa jay )

2. if er maddome action ar type chack kure , jaja functianality er kaz kure noton data ta return kurte huy
