import Homepage from "../pages/Homepage/Homepage"
import ChangePassword from "../pages/ChangePasswordPage/ChangePassword.jsx"
import SignupForm from "../pages/SignupPage/SignupForm.jsx"
import ProfileSettings from "../pages/Profile/ProfileSetting.jsx"
import EditProfile from"../pages/Profile/EditProfile.jsx"


const PublicRoutes = [
    {path:"/*",component:Homepage,layout:null},
    {path:"/changepassword",component:ChangePassword,layout:null},
    {path:"/signup",component:SignupForm,layout:null},
    {path:"/profilesetting",component:ProfileSettings,layout:null},
    {path:"/editprofile",component:EditProfile,layout:null},

]

const PrivateRoutes = [
   
]

export  {PublicRoutes,PrivateRoutes}