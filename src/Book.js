import React from 'react'

const Book = ({img, bookName, title, price,}) => {  // Book - component
// attribute, eventHandler
// onClick, onMouseOver
const clickHandler = () => {
   alert('не достатньо коштів на рахунку');
}
const complexExample = (bookName) => {
   alert('ПриватБанк');
}
   return <article className='book' onMouseOver={() => {
      console.log(title);
   }} >
      <img src={img} alt=''/>
      <h1>{bookName}</h1>
      <h3>{title}</h3>
      <p>{price}</p>
      <button type="button" onClick={clickHandler}>
         Купити
      </button>
      <button type="button" onClick={() => complexExample(bookName)}>
         Кредит
      </button>
   </article>
};

export default Book
