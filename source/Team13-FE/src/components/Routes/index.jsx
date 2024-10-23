import Homepage from "../pages/Homepage/Homepage"
import ChangePassword from "../pages/ChangePasswordPage/ChangePassword.jsx"
import SignupForm from "../pages/SignupPage/SignupForm.jsx"
import PreProductDetail from "../pages/ProductDetailPage/PreProductDetailPage.jsx"
import OrderTrackingPage from "../pages/OrderTrackingPage/OrderTrackingPage.jsx"
import OrderComplete from "../pages/OrderComplete/OrderComplete.jsx"
import PolicyPage from "../pages/PolicyPage/PolicyPage.jsx"
const PublicRoutes = [
    {path:"/*",component:Homepage,layout:null},
    {path:"/changepassword",component:ChangePassword,layout:null},
    {path:"/signup",component:SignupForm,layout:null},
    {path:"/product-detail",component:PreProductDetail,layout:null},
    {path:"/order-tracking",component:OrderTrackingPage,layout:null},
    {path:"/order-complete",component:OrderComplete,layout:null},
    {path:"/policy",component:PolicyPage,layout:null},

]

const PrivateRoutes = [
   
]

export  {PublicRoutes,PrivateRoutes}