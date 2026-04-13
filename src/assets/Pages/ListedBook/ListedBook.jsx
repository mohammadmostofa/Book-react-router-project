
import React, { use } from 'react';
import Card from '../../../Component/shared/Cards/Card';

const BookPromise = fetch('/booksData.json').then(res => res.json())


const ListedBook = () => {
  
   const book = use(BookPromise)
   console.log(book,'book')

  return (
    <div className='mt-25'>
            <h1 className='text-5xl font-bold text-center pb-15 '>Book</h1>

            <div className='grid grid-cols-4 justify-between items-center gap-6 container mx-auto'>
              {
                book.map((book,index) =>  (
                      <Card key={index} book={book} > </Card>
                ) )
              }
            </div>
    </div>
  );
};

export default ListedBook;