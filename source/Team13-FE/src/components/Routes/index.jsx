import Homepage from "../pages/Homepage/Homepage"
import ChangePassword from "../pages/ChangePasswordPage/ChangePassword.jsx"
import SignupForm from "../pages/SignupPage/SignupForm.jsx"

const PublicRoutes = [
    {path:"/",component:Homepage,layout:null},
    {path:"/changepassword",component:ChangePassword,layout:null},
    {path:"/signup",component:SignupForm,layout:null},

]

const PrivateRoutes = [
   
]

export  {PublicRoutes,PrivateRoutes}