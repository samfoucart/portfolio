import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import BlogPost from './components/BlogPost';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        
      </Route>
      <Route path="posts" element={<BlogPost />} />
    </Routes>
  </HashRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
