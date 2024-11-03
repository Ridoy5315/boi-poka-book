import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import BookDetail from './components/Bookdetail/BookDetail.jsx';
import ListBooks from './components/ListBooks/ListBooks.jsx';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path: "/listedBooks",
        loader: () => fetch('/booksData.json'),
        element: <ListBooks></ListBooks>
      },
      {
        path: "/books/:bookId",
        loader: () => fetch('/booksData.json'),
        element: <BookDetail></BookDetail>
      }
    ]
  },

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
