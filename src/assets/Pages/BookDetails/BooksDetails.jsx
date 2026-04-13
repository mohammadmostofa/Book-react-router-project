import React from 'react';
import { useLoaderData, useParams,  } from 'react-router';



const BooksDetails = () => {
  const {bookId} = useParams()
  console.log(bookId);
  
  const books = useLoaderData();
    
  const FindMathod = books.find(book => book.bookId === Number (bookId) )

  const  {bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing}  = FindMathod

  return (

    <div className="card bg-base-100 shadow-sm grid grid-cols-2 justify-center items-center gap-5">
  <figure>
    <img className='w-100 h-140 rounded-2xl '
      src={image}
      alt="Movie" />
  </figure>

  <div className="card-body flex flex-col justify-center items-start  space-y-5">

    <h2 className="card-title font-bold text-5xl "> {bookName} </h2>
    <p> {author} </p>
    <h5> {category} </h5>
         <p>
          reView:{review}
         </p>

    <h3 className='flex gap-4'> tag {
          
          tags.map((tag, inx) => <span key={inx} tag = {tag} > {tag} </span> )
          
         } </h3>

         


         <h4> <span>Name Of Page:</span> <span> {totalPages} </span> </h4>
         <h4> <span>Publisher:</span> <span> {publisher} </span> </h4>
         <h4> <span>Year Of Publishing</span> <span> {yearOfPublishing} </span> </h4>
         <h4> <span>Rating</span> <span> {rating} </span> </h4>
           
           <div className='flex gap-5'>
            <button className='btn ' >Read</button>
            <button className='btn  btn-accent' >Wishlist</button>
           </div>

    
  </div>
</div>
  
  );
};

export default BooksDetails;
