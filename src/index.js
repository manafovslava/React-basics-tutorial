import React from 'react';
import ReactDOM  from 'react-dom';
import './index.css';
import { books } from './books'; 
import Book from './Book'; 
// JSX Rules
// return single element
// div / section / article or Fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formating 


function BookList() {                // react component wich return markup
   return (
   <section className='booklist'>
      {
         books.map((book) => {
            return <Book key={book.id} {...book}></Book>
         })
      }
   </section>
   );
};

ReactDOM.render(<BookList />, document.getElementById('root'));
