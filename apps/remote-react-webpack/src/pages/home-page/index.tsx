import { Link } from 'react-router-dom';
import ReactWebpack from '../../ReactWebpack';
import React from 'react';

function HomePage() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-12'>
      <div className='container flex flex-col items-center text-center gap-4'>
        <h2 className='text-2xl font-bold leading-tight tracking-tighter md:text-3xl mb-1'>
          ReactJS with Webpack
        </h2>
        <Link to={'/users'} className='text-blue-500'>
          Access to Users
        </Link>
        <ReactWebpack />
      </div>
    </main>
  );
}

export default HomePage;
