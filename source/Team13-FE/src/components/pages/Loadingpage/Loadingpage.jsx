import React from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import "./Loadingpage.css"
export default function Loadingpage() {
    return (
        <>

            <Row>
                <Col xl={12} md={12} sm={12}>
                    <div className='container-loading'>
                        <div className='loading' style={{display:"flex",gap:"5px"}}>
                            <h3>Loading</h3>
                            <div >
                                <Spinner animation="border" variant="primary" />
                                <Spinner animation="border" variant="primary" />
                                <Spinner animation="border" variant="primary" />
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

        </>
    )
}
