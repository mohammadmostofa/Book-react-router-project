import React from 'react';
import { Link } from 'react-router';

const PageToRead = () => {
  return (
    
  
    <div>
              
              <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-4">
      <h1 className="text-7xl font-bold text-red-500">404</h1>

      <h2 className="text-2xl font-semibold mt-4">
        Oops! Page Not Found
      </h2>

      <p className="text-gray-600 mt-2 max-w-md">
        The page you are looking for might have been removed, had its name changed,
        or is temporarily unavailable.
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
      >
        Go Back Home
      </Link>
    </div>


    </div>
    
    
  );
};

export default PageToRead;