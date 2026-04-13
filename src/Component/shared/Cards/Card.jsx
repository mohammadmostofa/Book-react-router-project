import React from 'react';
import { Link } from 'react-router';

const Card = ({book}) => {
  return (
    <Link to={`/BooksDetails/${book.bookId}`} className=' p-6 border border-white '>

      <div >

  <figure>
    <img className='w-90 h-90'
      src={book.image}
      alt={book.bookName} />
  </figure>
  <div className="card-body">
      <div className="flex gap-4 "> 
        {
          book.tags.map((tag,inx) =>  <button className='btn btn-success ' key={inx} tag={tag} > {tag} </button>) 
        }

      </div>

    <h2 className="card-title">
      {book.bookName}
    </h2>

    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    
    <div className='border-t border-dashed mt-3'>

      <div className="card-actions justify-between mt-8 ">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-utoline">Products</div>
    </div>

    </div>
   
  </div>
      </div>
      
    </Link>
  );
};

export default Card;