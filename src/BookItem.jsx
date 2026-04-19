const BookItem = (props) => {
    console.log("props:");
    console.log(props);
   
    return (
      <div>
        <p>{props.book.name}</p>
        <button onClick={() => props.removeBook(props.book)}>Delete</button>
      </div>
    );
  };
  export default BookItem;
