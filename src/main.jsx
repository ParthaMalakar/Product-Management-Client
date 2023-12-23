import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
      }
    ],
  },
  

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  
      <div>
        <RouterProvider router={router} />
      </div>
    
)