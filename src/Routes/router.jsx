import { createBrowserRouter } from "react-router-dom";
import Root from "../component/Root/Root";
import ErrorPages from "../component/ErrorPage/ErrorPages";
import HomeLayout from "../layout/HomeLayout";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
        errorElement:<ErrorPages/>,
        children:[
            {
                path:'/',
                element:<HomeLayout></HomeLayout>
            },
            {
              path:'brands',
              
            }
        ]
    }
])