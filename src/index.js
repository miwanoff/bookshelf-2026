import React, { useState } from "react";
import ReactDOM from 'react-dom/client';
import booksData from "./books.js";

// function Hello() {
//   return (
//     <div>
//       <h1 style={{ color: "red" }}>Hello, world!</h1>
//       <h2>{booksData[0].name}</h2>
//     </div>
//   );
// }

const App = () => {
  const [books, setBooks] = useState(booksData);
  return (
    <div>
     {books.map((book) => {
        return (
          <div key={book.id}>
            <p>{book.name}</p>
          </div>
        );
      })}
    </div>
  );
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

