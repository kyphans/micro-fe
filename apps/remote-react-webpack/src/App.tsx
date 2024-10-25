import ReactWebpack from './ReactWebpack';
import React from 'react';
import ReduxProvider from '@repo/data-context/provider';
import { PersistGate, persistor } from '@repo/data-context/store';


export const App = () => (
  <div>
    <h1>Next JS with React</h1>
    <ReduxProvider>
      <PersistGate loading={null} persistor={persistor}>
        <ReactWebpack />
      </PersistGate>
    </ReduxProvider>
  </div>
);

export default App;
