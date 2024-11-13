import { Col, Row } from "react-bootstrap"
import "./OrderTrackingPage.css"
import OrderPlace from "../../../assets/OrderPlace.jpg"
import ShippingOrder from "../../../assets/ShippingOrder.png"
import DeliveredOrder from "../../../assets/DeliveredOrder.jpg"
import OrderArrow from "../../../assets/OrderArrow.jpg"
import { Link } from "react-router-dom"
export default function OrderTrackingPage() {
    return (
        <>
            <div style={{ marginBottom: "6%", marginTop: "6%" }}>
                <Row>
                    <Col xl={12}>
                        <div className="block-icon-tracking-order-page">
                            <div className="order-place-image">
                                <img src={OrderPlace} alt="image-order-place" width={100} />
                            </div>
                            <div className="order-place-arrow-image">
                                <img src={OrderArrow} alt="image-order-place" width={50} />
                                <img src={OrderArrow} alt="image-order-place" width={50} />
                                <img src={OrderArrow} alt="image-order-place" width={50} />
                            </div>
                            <div className="order-shipping-image">
                                <img src={ShippingOrder} alt="image-shipping-order" width={100} />
                            </div>
                            <div className="order-place-arrow-image">
                                <img src={OrderArrow} alt="image-order-place" width={50} />
                                <img src={OrderArrow} alt="image-order-place" width={50} />
                                <img src={OrderArrow} alt="image-order-place" width={50} />
                            </div>
                            <div className="order-delivered-image">
                                <img src={DeliveredOrder} alt="image-delivered-order" width={100} />
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="block-button-order-tracking">
                            <div className="charactor-tracking-order-detail">
                                <p style={{ margin: '0' }}>Unit transfer details</p>
                            </div>
                            <div className="button-return-homepage-tracking-order">
                                <Link to={"/"} style={{ color: "black", textDecoration: 'none' }}>
                                    <p style={{ margin: '0', fontWeight: '400' }} id="button-return-at-tracking-order">Return</p></Link>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} >
                        <div style={{ background: "#ECF0F1", borderRadius: "7px" ,marginTop:"5px"}}>
                            <div style={{ padding: "15px" }} className="block-order-information-and-order-address">
                                <h6>Order-Information</h6>
                                <p>OrderID: <span>#000001</span></p>
                                <p>Product: <span>Cup</span></p>
                                <p>Quantity: <span>10</span></p>
                                <p>Total: <span>1000000$</span></p>
                                <hr></hr>
                                <h6>Order-address</h6>
                                <p>Name: <span>Alexander</span></p>
                                <p>Phone-number: <span>0987654321</span></p>
                                <p>Address: <span>quan hoang kiem / newyork city / american</span></p>
                            </div>

                        </div>
                    </Col>
                    <Col md={6} >
                        <div style={{ background: "#ECF0F1", borderRadius: "7px",marginTop:"5px" }}>
                            <div style={{ padding: "15px" }} className="block-order-information-and-order-address">
                                <h6>Order-Status</h6>
                                <p>Status: <span>shipping</span></p>
                                <p>expected date: <span>20/10/2024</span></p>
                                <p>shipping unit: <span>Economy delivery</span></p>
                                <p>Total: <span>1000000$</span></p>
                                <hr></hr>
                                <h6>Shipping-and-payment</h6>
                                <p>shipping fee: <span>100$</span></p>
                                <p>Total: <span>1001000000$</span></p>
                                <p>Payment method: <span>OCD</span></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}
