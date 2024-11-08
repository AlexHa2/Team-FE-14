
import Homepage from "../pages/Homepage/Homepage";
import ChangePassword from "../pages/ChangePasswordPage/ChangePassword.jsx";
import SignupForm from "../pages/SignupPage/SignupForm.jsx";
import PreProductDetail from "../pages/ProductDetailPage/PreProductDetailPage.jsx";
import OrderTrackingPage from "../pages/OrderTrackingPage/OrderTrackingPage.jsx";
import OrderComplete from "../pages/OrderComplete/OrderComplete.jsx";
import PolicyPage from "../pages/PolicyPage/PolicyPage.jsx";
import LoginForm from "../pages/LoginPage/LoginForm.jsx";
import MyListings from "../pages/MyListings/MyListings.jsx"; 
import FavoritesPage from "../pages/FavoritesPage/FavoritesPage";
import UserTable from "../pages/UserTable/UserTable"; // Import UserTable
import ProfileSettings from "../pages/Profile/ProfileSetting.jsx";
import EditProfile from "../pages/Profile/EditProfile.jsx"

const PublicRoutes = [
    { path: "/*", component: Homepage, layout: null },
    { path: "/changepassword", component: ChangePassword, layout: null },
    { path: "/signup", component: SignupForm, layout: null },
    { path: "/product-detail", component: PreProductDetail, layout: null },
    { path: "/order-tracking", component: OrderTrackingPage, layout: null },
    { path: "/order-complete", component: OrderComplete, layout: null },
    { path: "/policy", component: PolicyPage, layout: null },
    { path: "/login", component: LoginForm, layout: null },
    { path: "/my-listings", component: MyListings, layout: null },
    { path: "/favorites", component: FavoritesPage, layout: null },
    { path: "/user-table", component: UserTable, layout: null }, 
    { path: "/profile", component: ProfileSettings, layout: null },
    { path: "/edit-profile", component: EditProfile, layout: null }, 
];


const PrivateRoutes = [
    // Các route cần bảo mật nếu có
];

export { PublicRoutes, PrivateRoutes };
