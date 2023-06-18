import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter} from "react-router-dom";
import { GlobalProvider } from './context/global';

import App from './App';
import { BookmarkProvider } from './context/bookmark';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalProvider>
      <BookmarkProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
      </BookmarkProvider>
    </GlobalProvider>
  </React.StrictMode>
);

