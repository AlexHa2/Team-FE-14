import { Col, Row } from "react-bootstrap"
import "./OrderComplete.css"
import IconComplete from "../../../assets/IconCompleteOrder.jpg"
import { Link } from "react-router-dom"
export default function OrderComplete() {
    return (
        <Row>
            <Col>
                <div style={{ background: "#E9ECEF", display: "flex", justifyContent: 'center', alignItems: 'center', height: "90vh", marginBottom: "3%", marginTop: "3%", borderRadius: "7px", flexDirection: "column" }}>
                    <div style={{ background: "#FFFFFF" }} className="block-order-complete-page">
                        <div className="color-order-complete"></div>
                        <div className="block-content-order-complete-page">

                            <div className="image-order-complete"><img src={IconComplete} width={60} alt="complete" /></div>
                            <h4>Order-complete</h4>
                            <div >
                                <p style={{ margin: "0" }}> OrderID: <span>#00001</span></p>
                                <p >******************************</p>
                            </div>
                            <div className="block-charactor-shipping-infor-order-complete">
                                <p style={{ fontWeight: '500' }}>Shipping-infor</p>
                                <p>Alexander</p>
                                <p>0987654321</p>
                                <p>hoan kiem/ new york city/ american</p>
                            </div>
                            <div className="block-charactor-payment-method-order-complete">
                                <p style={{ fontWeight: '500' }}>Order-payment-method</p>
                                <p>Payment: OCD</p>
                            </div>

                        </div>

                    </div>
                    <div className="block-button-order-complete">
                        <div className="button-order-complete">
                            <div className="button-continute-exchange">
                                <Link to={"/"} style={{ color: "aliceblue", textDecoration: 'none' }}><p style={{padding:"5px 10px",margin:"0",height:"100%",width:"100%"}}>Continute-exchange</p></Link>
                                </div>
                            <div className="button-tracking-order">
                                <Link to={"/order-tracking"} style={{ color: "aliceblue", textDecoration: 'none' }}><p style={{padding:"5px 10px",margin:"0",height:"100%",width:"100%"}}>Tracking-Order</p></Link>
                                </div>
                        </div>
                    </div>
                </div>

            </Col>
        </Row>
    )
}
