import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import booksData from "./books.js";

import BookItem from "./BookItem.jsx";

import Image from "./Image.jsx";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
// function Hello() {
//   return (
//     <div>
//       <h1 style={{ color: "red" }}>Hello, world!</h1>
//       <h2>{booksData[0].name}</h2>
//     </div>
//   );
// }

const Header = (props) => {
  return (
    <div className={props.className}>
      <Image src={logo} />
      <h1 className="display-2">Книжковий магазин</h1>
    </div>
  );
};

const App = () => {
  const [books, setBooks] = useState(booksData);
  const [cart, setCart] = useState([]);

  const addBookToCart = (book) => {
    // Використовуємо оператор spread (...), щоб створити новий масив
    // і додати новий елемент в кінець
    setCart([...cart, book]);
  };

  const deleteBookFromCart = (book) => {
    // Filter повертає новий масив, тому тут все просто
    const updatedCart = cart.filter((item) => item.id !== book.id);
    setCart(updatedCart);
  };

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
                  <BookItem
                    book={book}
                    removeBook={removeBook}
                    addBookToCart={addBookToCart}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <h4>Кошик товарів</h4>
      {/* Використовуємо cart.length напряму */}
      <p>Кількість книг: {cart.length} </p>

      <ul className="list-group">
        {cart.map((book) => (
          <li key={book.id} className="list-group-item">
            <div className="row">
              <div className="col-4">{book.name}</div>
              <div className="col-3">{book.author}</div>
              <div className="col-2">{book.price}</div>
              <div className="col-3">
                <button
                  /* Замінюємо .bind(this, book) на просту стрілочну функцію */
                  onClick={() => deleteBookFromCart(book)}
                  type="button"
                  className="btn btn-outline-primary mt-auto mb-2"
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
