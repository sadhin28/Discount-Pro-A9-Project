
import { createBrowserRouter } from 'react-router-dom';
import MainRoot from '../component/Root/MainRoot';
import Home from '../layout/Home';
import BrandPage from '../component/page/BrandPage'
import CouponPage from '../component/page/CouponPage'
import Profile from '../component/page/Profile'
import UpdateProfile from '../component/page/UpdateProfile';
import Login from '../component/page/Login';
import BrandDetails from '../component/page/BrandDetails';
import AboutDev from '../component/page/AboutDev';
import Register from '../component/page/Register';
import ForgetPassword from '../component/page/ForgetPassword';

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainRoot></MainRoot>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:() => fetch('/data.json')
      },
      {
        path:'/brands',
        element:<BrandPage/>
      },
      {
        path:'/brand/:id',
        element:<CouponPage/>,
        loader: ({ params }) => fetch(`/data.json`).then(res => res.json()).then(data => data.find(brand => brand._id === params.id)),

      },
      {
        path:'/profile',
        element:<Profile/>
      },
      {
        path:'/update-profile',
        element:<UpdateProfile></UpdateProfile>
      },
     {
       path:'/auth/login',
       element:<Login></Login>
     },
     {
      path:'/brand/details/:id',
      element:<BrandDetails/>,
       loader: ({ params }) => fetch(`/data.json`).then(res => res.json()).then(data => data.find(brand => brand._id === params.id)),
     },
     {
      path:'/about',
      element:<AboutDev/>
     },
     {
      path:'/auth/register',
      element:<Register/>
     },
     {
      path:'/auth/password-reset',
      element:<ForgetPassword/>
     }
    ]
  },
]);

export default router