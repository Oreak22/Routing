import { useEffect, useState } from "react";
import api from "./services/api";

const Home = () => {
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get("/api/books")
      .then((res) => {
        const data = res.data.books
        setBooks(data)
        setLoading(false)
        
      })
      .catch((error) => {
        console.error("Failed to load books:", error);
      });
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading .......</p>
      ) : (
        books.map((book) => (
          <div key={book.id}>
            <p>{book.title}</p>
            <p>{book.author}</p>
            <p>{book.category}</p>
          </div>
        ))
      )}
    </>
  );
};

export default Home;
