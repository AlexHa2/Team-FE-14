
import Offcanvas from 'react-bootstrap/Offcanvas';
import LogoWeb from "../../../assets/logoWeb.jpg"
import "../Footer/Footer"
import LogoFacebook from "../../../assets/LogoFaceOffcanvas.jpg"
import LogoInstargam from "../../../assets/logoInstargramOffcanvas.jpg"
import "./Offcanvas.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Offcanva({ stateShow, handleClose, userLogin }) {

  return (
    <>
      <Offcanvas show={stateShow} onHide={handleClose}>
        <Offcanvas.Header closeButton style={{ padding: '0', paddingLeft: '5px', paddingRight: "10px" }}>
          <Offcanvas.Title>
            <div className='icon-image-logo-header-offcanvas'>
              <img src={LogoWeb} alt='logo-web' width={80} height={80} />
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        {userLogin ? (<>
          <hr className='line-offcanvas' style={{ margin: '0' }}></hr>
          <Offcanvas.Body>
            <div className='block-icon-offcanvas-profile-listing-favorite'>
              <AccountCircleIcon />
              <p>My profile</p>
            </div>
            <div className='block-icon-offcanvas-profile-listing-favorite'>
              <DensityMediumIcon />
              <p>My listings</p>
            </div>
            <div className='block-icon-offcanvas-profile-listing-favorite'>
              <FavoriteBorderIcon />
              <p>Favorite</p>
            </div>
          </Offcanvas.Body>
        </>) : null
        }
        <hr className='line-offcanvas' style={{ margin: '0' }}></hr>
        <Offcanvas.Body>
          <div className="block-footer-contend-detail" >
            <div className="footer-content-about-us" style={{ color: 'black' }}>
              <h5>Learn about us</h5>
              <p className='offcanvas-contact-us'>About</p>
              <p className='offcanvas-contact-us'>Contact</p>
              <p className='offcanvas-contact-us'>FAQs</p>
            </div>
            <div className="footer-content-company" style={{ color: 'black' }}>
              <h5>Company</h5>
              <p className='offcanvas-contact-us'>BLOG</p>
              <p className='offcanvas-contact-us'>Privacy & Policy</p>
              <p className='offcanvas-contact-us'>Terms & Conditions</p>
            </div>
          </div>
        </Offcanvas.Body>
        <hr style={{ width: "100%" }}></hr>
        <Offcanvas.Body >
          <div className='block-icon-offcanvas'>
            <div className='icon-facebook-offcanvas'>
              <img src={LogoFacebook} width={25} height={25} alt='logoFace' />
            </div>
            <div className='icon-istargram-offcanvas'>
              <img src={LogoInstargam} width={32} height={32} alt='logoinstargam' />
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Offcanva;