import React from 'react';

const Banner = () => {
  return (
    <div>

      <div className="hero bg-base-200 ">
  <div className=" min-h-[95vh]  hero-content flex-col lg:flex-row-reverse flex justify-between items-center 
  container mx-auto ">
    <img
      src='/hero_img.jpg'
      className=" rounded-lg shadow-2xl"
    />
    <div className='flex flex-col space-y-15'>
      <h1 className="text-5xl font-bold leading-5xl ">Books to freshen up <br /> your bookshelf</h1>
      <div>
              <button className="btn btn-primary capitalize ">view the list</button>

      </div>
    </div>
    
  </div>
</div>
      
    </div>
  );
};

export default Banner;