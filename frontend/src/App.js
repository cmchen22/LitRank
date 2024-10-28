import React, { useEffect, useState } from 'react';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/api/books')
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error('Error fetching books:', error));
  }, []);

  return (
    <div>
      <h1>LitRank</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} - Rating: {book.rating}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
