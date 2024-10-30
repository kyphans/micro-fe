import React from 'react';
import ReduxProvider from '@repo/data-context/provider';
import { PersistGate, persistor } from '@repo/data-context/store';
import { RouterProvider } from 'react-router-dom';
import { routers } from './routers';

export const App = () => {
  return (
    <ReduxProvider>
      <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={routers} />
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;
