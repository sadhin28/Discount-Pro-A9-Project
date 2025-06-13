import { createBrowserRouter } from "react-router-dom";
import Root from "../component/Root/Root";
import ErrorPages from "../component/Pages/ErrorPages";
import HomeLayout from "../layout/HomeLayout";
import BrandPage from "../component/Pages/BrandPage";
import CouponPage from "../component/Pages/CouponPage";
import Profile from "../component/Pages/Profile";
import Login from "../component/Pages/Login";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
        errorElement:<ErrorPages/>,
        children:[
            {
                path:'/',
                element:<HomeLayout></HomeLayout>,
                loader:() => fetch('/data.json'),
            },
            {
              path:'/brands',
              element:<BrandPage></BrandPage>  
            },
            {
                path:'/brand/:id',
                element:<CouponPage/>,

            },
            {
                path:'/profile',
                element:<Profile></Profile>
            },
            {
                path:"/login",
                element:<Login></Login>
            }
        ]
    }
])