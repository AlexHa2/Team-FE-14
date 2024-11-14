

import { Col, Row } from "react-bootstrap"
import "./ProductDetailPage.css"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import YourOffer from "../../clientComponent/YourOffer/YourOffer"
import OffcanvasSelectOrder from "../../clientComponent/OffcanvasSelectOrder/OffcanvasSelectOrder";
import { useState } from "react";
import OffcanvasListItems from "../../clientComponent/OffcanvasListItems/OffcanvasListItems";
export default function ProductDetailPage({ Product, UserLogin }) {
    const [stateShowButtonListimes, setstateShowButtonListimes] = useState(false)
    const [stateShowListItems, setstateShowListItems] = useState(false)

    const handleShowShowButtonListimes = () => {
        setstateShowButtonListimes(true)
    }

    const handleCloseShowButtonListimes = () => {
        setstateShowButtonListimes(false)
    }


    const handleShowListItems = () => {
        setstateShowListItems(true)
    }

    const handleCloseListItems = () => {
        setstateShowListItems(false)
        setstateShowButtonListimes(false)
    }
    return (
        <>
            <div style={{ marginBottom: "10px", marginTop: '10px', }} className="block-product-detail">
                <Row>
                    <Col xs={12} md={12} lg={6}>
                        <div className="image-product-detail-page" >
                            <img src={Product.imageSrc} alt="product-image" width={500} id="image-product-detail" />
                        </div>
                    </Col>
                    <Col xs={12} md={12} lg={6}>
                        <div className="block-detail-infor-proudct">
                            <div className="price-product-detail">
                                <h4>${Product.itemValue}</h4>
                            </div>
                            <div className="partial-cash-product-detail">
                                <h4>💸 Partial Cash</h4>
                            </div>
                            <h4 style={{ fontWeight: "bold", fontSize: 'x-large' }}>{Product.itemName}</h4>
                            <div className="address-product-detail">
                                <div><LocationOnIcon /></div>
                                <p style={{ fontWeight: "500" }}>{Product.itemLocation}</p>
                            </div>
                            <div style={{ color: "#64748B" }}>
                                <p>New {Product.itemName}</p>
                            </div >
                            <div className="block-condition-product-detail">
                                <p style={{ color: "#64748B" }}>
                                    Condition:
                                </p>
                                <p style={{ fontWeight: "600" }}>New</p>
                            </div>
                            <div onClick={handleShowShowButtonListimes}>
                                <YourOffer useLogin={UserLogin} />
                            </div>
                        </div>
                    </Col>
                    <div>
                        <OffcanvasSelectOrder stateShowListItem={stateShowButtonListimes} handleClose={handleCloseShowButtonListimes} placement={'end'} name={'end'} handleShowListItems={handleShowListItems}
                        />
                    </div>
                    <div>
                        <OffcanvasListItems StateShowListItems={stateShowListItems} handleClose={handleCloseListItems} placement={'end'} name={'end'}/>
                    </div>
                </Row>
            </div>
        </>
    )
}
