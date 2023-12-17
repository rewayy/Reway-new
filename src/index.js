import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Cards from './Card/FCards';
import Navbar from './FAQs/FAQPage';
import BlogPost from './components/Blog.js';
import reportWebVitals from './reportWebVitals';
import One1 from './pages/1.js';
import One2 from './pages/2.js';
import One3 from './pages/3.js';
import One4 from './pages/4.js';
import One5 from './pages/5.js';
import One6 from './pages/6.js';
import One7 from './pages/7.js';
import One8 from './pages/8.js';
import One9 from './pages/9.js';
import One10 from './pages/10.js';
import One11 from './pages/11.js';
import One12 from './pages/12.js';
import One13 from './pages/13.js';
import One14 from './pages/14.js';
import One15 from './pages/15.js';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {

    path: '/',
    element: <App />,
  },
  {
    path:'/Reway-new',
    element : <App />,
  },
  {
    path: '/blogs',
    element: <BlogPost />,
  },
  {
    path: 'one1',
    element: <One1 />,
  },
  {
    path: 'one2',
    element: <One2 />,
  },
  {
    path: 'one3',
    element: <One3 />,
  },
  {
    path: 'one4',
    element: <One4 />,
  },
  {
    path: 'one5',
    element: <One5 />,
  },
  {
    path: 'one6',
    element: <One6 />,
  },
  {
    path: 'one7',
    element: <One7 />,
  },
  {
    path: 'one8',
    element: <One8 />,
  },
  {
    path: 'one9',
    element: <One9 />,
  },
  {
    path: 'one10',
    element: <One10 />,
  },
  {
    path: 'one11',
    element: <One11 />,
  },
  {
    path: 'one12',
    element: <One12 />,
  },
  {
    path: 'one13',
    element: <One13 />,
  },
  {
    path: 'one14',
    element: <One14 />,
  },
  {
    path: 'one15',
    element: <One15 />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
