import { useEffect, useState } from "react";
import "./OffcanvasSelectOrder.css"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Offcanvas } from "react-bootstrap";

export default function OffcanvasSelectOrder({ stateShowListItem, handleClose, handleShowListItems, ...props }) {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 1000);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <Offcanvas show={stateShowListItem} onHide={handleClose} {...props} style={{
                width: isMobile ? '100%' : '35%',
                borderTopLeftRadius: isMobile ? '10px' : '15px',
                borderBottomLeftRadius: isMobile ? '10px' : '15px',
            }}>
                <Offcanvas.Header closeButton className="header-offcanvas-Select-item-to-barter">
                    <Offcanvas.Title>Select item to barter</Offcanvas.Title>
                </Offcanvas.Header>
                <hr></hr>
                <Offcanvas.Body>
                    <div className="block-Select-item-to-barter-offcanvas">
                        <div className="charactor-Select-item-to-barter-offcanvas">
                            <p style={{ margin: "0" }}>Select item to offer.</p>
                        </div>
                        <div className="Button-Select-item-to-barter-offcanvas" onClick={handleShowListItems}>
                            <div className="icon-Select-item-to-barter-offcanvas">
                                <AddCircleOutlineIcon style={{ height: "15px", width: "15px" }} />
                            </div>
                            <p style={{ margin: "0" }} className="charactor-button-Select-item-to-barter-offcanvas">List a new item</p>
                        </div>
                    </div>
                </Offcanvas.Body>
                <hr></hr>
            </Offcanvas>
        </>
    )
}
