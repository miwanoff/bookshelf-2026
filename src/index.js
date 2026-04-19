import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import booksData from "./books.js";
import logo from "./logo.svg";

// function Hello() {
//   return (
//     <div>
//       <h1 style={{ color: "red" }}>Hello, world!</h1>
//       <h2>{booksData[0].name}</h2>
//     </div>
//   );
// }

const Image = (props) => {
  return <img src={props.src} alt="logo" style={{ width: "150px" }} />;
};

const Header = (props) => {
  return (
    <div className={props.className}>
      <Image src={logo} />
      <h1>Книжковий магазин</h1>
    </div>
  );
}


const App = () => {
  const [books, setBooks] = useState(booksData);

  const removeBook = (book) => {
    const updatedBooks = books.filter((item) => item.id !== book.id);
    setBooks(updatedBooks);
  };

  return (
    <div>
      <Header className="header" />
      {books.map((book) => {
        return (
          <div key={book.id}>
            <h4>{book.name}</h4>
            <button onClick={() => removeBook(book)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
