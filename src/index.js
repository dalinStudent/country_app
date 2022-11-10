import React from 'react';

import App from './App';
import { Provider } from 'react-redux';
import {StrictMode} from 'react';
import { createRoot } from 'react-dom/client';
import makeStore from './redux/store'

const store = makeStore()

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
  </Provider>
  </StrictMode>
)
