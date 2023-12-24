import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Components/RootPage/Main.jsx';
import Home from './Components/Home/Home.jsx';
import ProductPage from './Components/ProductPage/ProductPage.jsx';
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx';
import Login from './Components/Login/Login.jsx';
import Registration from './Components/Registration/Registration.jsx';
import Authprovider from './provider/Authprovider.jsx';
import MyCart from './Components/MyCart/MyCart.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path: "/product",
        element:<ProductPage></ProductPage>
      },
      {
        path:"/details/:id",
        element:<ProductDetails></ProductDetails>,
        loader:({params})=>fetch(`http://localhost:5000/Details/${params.id}`)

      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
       path:"/register",
       element:<Registration></Registration>
      },
      {
        path:"/mycart",
        element:<MyCart></MyCart>
      }
    ],
  },
  

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <Authprovider>
      <div>
        <RouterProvider router={router} />
      </div>
      </Authprovider>
)