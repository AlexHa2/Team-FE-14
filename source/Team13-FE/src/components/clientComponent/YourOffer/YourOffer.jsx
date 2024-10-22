import React from 'react'
import "./YourOffer.css"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { Link } from 'react-router-dom';
export default function YourOffer( {useLogin} ) {
  // console.log("login",useLogin)
  return (
    <div className='block-your-offer-product-detail'>
      <div className='your-offer-product-detail'>
        <p>Your Offer</p>
      </div>
      <div className='block-select-items-product-detail'>
        <div className='select-items-product-detail'>
          {useLogin ? (
            <>
              <div>
                <AddCircleIcon />
              </div>
              <p>Select Items to Doi</p>
            </>
          ) :
            (
              <p>To make an offer, you must <Link to={"/signup"} className='your-offer-before-register'>Register</Link>  or <Link to={"/"} className='your-offer-before-log-in'>Log in</Link> to your previously created account.</p>
            )}
        </div>
      </div >
      <div className='block-make-an-offer-product-detail'>
        <div className='make-an-offer-product-detail' aria-disabled>
          <div><SwapHorizIcon /></div>
          <p style={{ margin: "0" }}>Make an offer</p>
        </div>
      </div>
    </div >
  )
}
