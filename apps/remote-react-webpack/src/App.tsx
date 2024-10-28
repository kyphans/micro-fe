import ReactWebpack from './ReactWebpack';
import React from 'react';
import ReduxProvider from '@repo/data-context/provider';
import { PersistGate, persistor } from '@repo/data-context/store';


export const App = () => (
  <div>
    <ReduxProvider>
      <PersistGate loading={null} persistor={persistor}>
        <main className='flex min-h-screen flex-col items-center justify-center p-12'>
          <div className='container flex flex-col items-center text-center gap-4'>
            <h2 className='text-2xl font-bold leading-tight tracking-tighter md:text-3xl mb-1'>
              React with webpack
            </h2>
            <ReactWebpack />
          </div>
        </main>
      </PersistGate>
    </ReduxProvider>
  </div>
);

export default App;
