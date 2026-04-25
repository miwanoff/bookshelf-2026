import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import booksData from "./books.js";

import BookItem from "./BookItem.jsx";

import Image from "./Image.jsx";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./books.css";
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
    //setCart([...cart, book]);
    setCart((prevCart) => {
      // Перевіряємо, чи є вже така книга в кошику
      const isBookInCart = prevCart.find((item) => item.id === book.id);

      if (!isBookInCart) {
        // Якщо книги немає, додаємо її в масив і встановлюємо count: 1
        return [...prevCart, { ...book, count: 1 }];
      } else {
        // Якщо книга вже є, створюємо новий масив, де у потрібної книги збільшено count
        return prevCart.map((item) =>
          item.id === book.id ? { ...item, count: item.count + 1 } : item,
        );
      }
    });
  };

  const deleteBookFromCart = (book) => {
    // Filter повертає новий масив, тому тут все просто
    //const updatedCart = cart.filter((item) => item.id !== book.id);
    //setCart(updatedCart);
    setCart((prevCart) => {
      if (book.count === 1) {
        // Якщо книга одна — видаляємо її з масиву
        return prevCart.filter((item) => item.id !== book.id);
      } else {
        // Якщо книг більше, створюємо новий масив, де зменшуємо count для потрібної книги
        return prevCart.map((item) =>
          item.id === book.id ? { ...item, count: item.count - 1 } : item,
        );
      }
    });
  };

  const removeBook = (book) => {
    const updatedBooks = books.filter((item) => item.id !== book.id);
    setBooks(updatedBooks);
  };

  const Sum = ({ goods }) => {
    // Використовуємо reduce для підрахунку загальної вартості
    const totalSum = goods.reduce((acc, book) => {
      // Видаляємо перший символ (валюту) та множимо на кількість
      const price = parseFloat(book.price.slice(1));
      return acc + price * book.count;
    }, 0);

    return <div> Сумарна вартість: {totalSum.toFixed(2)} </div>;
  };

  const Count = ({ goods }) => {
    // Підраховуємо загальну кількість усіх книг (суму всіх count)
    const totalCount = goods.reduce((acc, book) => acc + book.count, 0);

    return <div> Кількість книг у кошику: {totalCount} </div>;
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
              <div className="col-2">{book.author}</div>
              <div className="col-1">{book.price}</div>
              <div className="col-1">
                <span className="badge bg-secondary">К-сть: {book.count}</span>
              </div>

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
      <div className="row">
        <div className="col-12">
          <Count goods={cart} />
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <Sum goods={cart} />
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
