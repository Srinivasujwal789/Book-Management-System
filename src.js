import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get('http://localhost:5000/api/books');
      setBooks(res.data);
    };
    fetchBooks();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Book List</h2>
      <Link to="/books/add" className="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block">Add Book</Link>
      <ul>
        {books.map(book => (
          <li key={book._id} className="mb-2">{book.title} by {book.author}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
