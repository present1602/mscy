import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StoreProvider } from './screens/Context';

console.log("root index.tsx load")

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
