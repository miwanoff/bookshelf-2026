import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import booksData from "./books.js";
import logo from "./logo.svg";
import BookItem from "./BookItem.jsx";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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
      <h1 className ="display-2">Книжковий магазин</h1>
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
      <Header className="container-fluid p-5 bg-dark text-primary text-center" />
      <div className="container-fluid text-center">
        <div className="row justify-content-center">
          {books.map((book) => {
            return (
              <div className="col-sm-4 col-12" key={book.id}>
                <div className="card text-center my-5 p-3">
                  {/* Використовуємо removeBook без this */}
                  <BookItem book={book} removeBook={removeBook} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>

  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
