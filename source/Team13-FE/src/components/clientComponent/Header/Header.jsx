import LogoWeb from "../../../assets/logoWeb.jpg";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Avatar from "../../../assets/avatarUser.jpg";
import { useContext, useState } from "react";
import Offcanva from "../Offcanvas/Offcanvas";
import { UserContextStore } from "../../../Context/UserContext";

export default function Header() {
    const navigate = useNavigate();
    const { userState } = useContext(UserContextStore);
    const [stateShowOffcanvas, setStateShowOffcanvas] = useState(false);

    const [searchQuery, setSearchQuery] = useState(""); // New state for search query

    const handleShowOffcanvas = () => {
        setStateShowOffcanvas(true);
    };

    const handleCloseOffcanvas = () => {
        setStateShowOffcanvas(false);
    };

    const signup = () => {
        navigate('/signup');
    };


    const login = () => {
        navigate('/login'); // Điều hướng tới trang Login
    };

    const handleMyListings = () => {
        navigate('/my-listings'); // Điều hướng tới trang My Listings
    };

    const handleFavorite = () => {
        navigate('/favorites'); // Điều hướng tới trang Favorites
    }
    const handleSearch = (event) => {
        if (event.key === 'Enter') {
            // Navigate to items page with search query
            navigate(`/?search=${searchQuery}`);
        }

    };

    return (
        <>
            <Offcanva stateShow={stateShowOffcanvas} handleClose={handleCloseOffcanvas} userLogin={userState.userLogin} />
            <header className="container-header-client">
                <div className="icon-responesive-header" onClick={handleShowOffcanvas}>
                    <div><DensityMediumIcon /></div>
                </div>
                <div className="container-Logo-header">
                    <div className="Logo-header">
                        <Link to="/"><img src={LogoWeb} alt="Logo Web" width={80} height={80} id="logo-header-homepage" /></Link>
                    </div>
                    <div className="block-search-header">
                        <div className="search-header">
                            <input 
                                type="search" 
                                placeholder="What do you want to find" 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyPress={handleSearch} // Trigger search on "Enter" key
                            />
                        </div>
                        <div className="icon-search-header" onClick={() => navigate(`/?search=${searchQuery}`)}>
                            <div><SearchIcon /></div>
                        </div>
                    </div>
                </div>
                {!userState.userLogin ? (

                    <div className="block-button-login-header">
                        <div className="button-login-header" onClick={login}> 
                            <p>Log in</p>
                        </div>
                        <div className="button-Signup-header" onClick={signup}>
                            <p>Sign up</p>
                        </div>
                    </div>
                ) : (
                    <div className="block-button-after-login">
                        <div className="button-favorite-header-after-login" onClick={handleFavorite}>
                            <div className="block-icon-items">
                                <div className="block-button-after-login-header"><FavoriteBorderIcon /></div>
                                <p>Favorite</p>
                            </div>
                        </div>
                        <div className="button-my-listing-header" onClick={handleMyListings}>
                            <div className="block-icon-items">
                                <div className="block-button-after-login-header"><DensityMediumIcon /></div>
                                <p>My listings</p>
                            </div>
                        </div>
                        <div className="button-add-my-listing-header">
                            <div className="block-icon-items" id="icon-add-new-header">
                                <div className="block-button-after-login-header"><AddCircleOutlineIcon /></div>
                                <p className="button-add-new-items-header">List a new item</p>
                            </div>
                        </div>
                        <div className="button-view-profile-header">
                            <Link to="/profilesetting">
                                <div>
                                    <img src={Avatar} width={55} height={55} alt="User Avatar" />
                                </div>
                            </Link>
                        </div>
                    </div>
                )}
            </header>
        </>
    );
}
