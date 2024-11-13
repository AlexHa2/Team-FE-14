import "./Footer.css"
import FooterLogo from "../../../assets/logoFooterWeb.jpg"
import InstargamIcon from "../../../assets/instargamIcon.jpg"
import FaceBookIcon from "../../../assets/IconFaceBook.jpg"
import { Container } from "@mui/material"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link, useNavigate } from "react-router-dom"
export default function Footer() {
  const navigate = useNavigate()
  const handleLogiRouter = () => {
    navigate("/")
  }
  return (
    <>
      <div style={{ background: "#000000" }}>
        <div className="Block-footer-content">
          <Container maxWidth="xl">
              <div className="block-footer-content-above">
                <div className="footer-content-logo">
                  <div onClick={handleLogiRouter}>
                    <img src={FooterLogo} alt="logoFooter" width={100} height={100} />
                  </div>
                  <div className="content-logo-footer">
                    <p>Get the stuff you love in exchange for selling your unwanted items.</p>
                  </div>
                  <div className="input-email-footer-above">
                    <input placeholder="Email address" />
                    <div id="icon-arrow-footer-above" style={{ cursor: "pointer" }}>
                      <ArrowForwardIcon />
                    </div>
                  </div>
                  <div>
                    <img src={FaceBookIcon} width={40} height={40} alt="IconFooter" id="image-footer-above-face" />
                    <img src={InstargamIcon} width={70} height={50} alt="IconFooter" />
                  </div>
                </div>
                <div className="block-footer-contend-detail">
                  <div className="footer-content-about-us" style={{marginTop:"10px"}}>
                    <h2>Learn about us</h2>
                    <p style={{cursor:"pointer"}}>About</p>
                    <p style={{cursor:"pointer"}}>Contact</p>
                    <p style={{cursor:"pointer"}}>FAQs</p>
                  </div>
                  <div className="footer-content-company" style={{marginTop:"10px"}}>
                    <h2>Company</h2>
                    <p style={{cursor:"pointer"}}>BLOG</p>
                    <Link to={"/policy"} style={{cursor:"pointer",color:'white',textDecoration:"none"}}><p>Privacy & Policy</p></Link>
                    <p style={{cursor:"pointer"}}>Terms & Conditions</p>
                  </div>
                </div>
              </div>
          </Container>
          <hr style={{color:"white"}}/>
          <Container maxWidth="xl" >
            <div className="block-footer-content-below" >
              <div className="content-left-footer-below" >
                <p>© All Rights Reserved | 2024 - www.doi.com</p>
              </div>
              <div className="content-right-footer-below" >
                <p>One Studio</p>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  )
}
