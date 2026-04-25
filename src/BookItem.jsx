import Image from "./Image.jsx";
const BookItem = (props) => {
  console.log("props:");
  console.log(props);

  return (
    <div class="card center">
      <Image src={props.book.imageCover} />
      <div className="card-body">
        <div className="card-title">
          <h5>{props.book.name}</h5>
        </div>

        <button
          className="btn  btn-primary "
          onClick={() => props.removeBook(props.book)}
        >
          Delete
        </button>
        <button
          onClick={() => props.addBookToCart(props.book)}
          className="btn btn-warning mx-1"
        >
          Buy
        </button>
      </div>
    </div>
  );
};
export default BookItem;
