
import LogoWeb from "../../../assets/logoWeb.jpg"
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Avatar from "../../../assets/avatarUser.jpg"
import { useState } from "react";
import Offcanva from "../Offcanvas/Offcanvas";
export default function Header() {
    const [state, setState] = useState(true);
    const [stateShowOffcanvas,setStateShowOffcanvas] = useState(false)

    const handleShowOffcanvas = () => {
        setStateShowOffcanvas(true)
    }

    const handleCloseOffcanvas = () => {
        setStateShowOffcanvas(false)
    }

    return (
        <>
        <Offcanva stateShow={stateShowOffcanvas} handleClose={handleCloseOffcanvas} userLogin={true}/>
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
                            <input type="search" placeholder="what do you want to find">
                            </input>
                        </div>
                        <div className="icon-search-header">
                            <div><SearchIcon /></div>
                        </div>
                    </div>
                </div>
                {state ?
                    <div className="block-button-login-header">
                        <div className="button-login-header">
                            <p>Log in</p>
                        </div>
                        <div className="button-Signup-header">
                            <p>Sign up</p>
                        </div>
                    </div>
                    : <div className="block-button-after-login">
                        <div className="button-favorite-header-after-login">
                            <div className="block-icon-items">
                                <div className="block-button-after-login-header"><FavoriteBorderIcon /></div>
                                <p>Favorite</p>
                            </div>
                        </div>
                        <div className="button-my-listing-header">
                            <div className="block-icon-items">
                                <div className="block-button-after-login-header"><DensityMediumIcon /></div>
                                <p>My listings</p>
                            </div>
                        </div>
                        <div className="button-add-my-listing-header">
                            <div className="block-icon-items" id="icon-add-new-header">
                                <div className="block-button-after-login-header"><AddCircleOutlineIcon /></div>
                                <p className="button-add-new-items-header">List a new items</p>
                            </div>
                        </div>
                        <div className="button-view-profile-header">
                            <Link to="/">
                                <div >
                                    <img src={Avatar} width={55} height={55} alt="User Avatar">
                                    </img>
                                </div>
                            </Link>
                        </div>
                    </div>}
            </header>
        </>
    )
}
