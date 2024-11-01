import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Book from '../Book/Book';

const Books = () => {

     const [books, setBooks] = useState([]);

     useEffect( () => {
          fetch('./booksData.json')
          .then(res => res.json())
          .then(data => setBooks(data))
     }, [])
     return (
          <div className='my-24'>
               <h2 className='font-bold text-5xl text-center mb-9'>Books</h2>
               <div className='grid grid-cols-3 gap-7'>
               {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
               }
               </div>
          </div>
     );
};

Books.propTypes = {
     
};

export default Books;