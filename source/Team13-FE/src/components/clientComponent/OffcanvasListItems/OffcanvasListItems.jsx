import { useEffect, useRef, useState } from 'react'
import "./OffcanvasListItems.css"
import { Offcanvas } from 'react-bootstrap'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { toast } from 'react-toastify';
import { Form } from 'react-bootstrap';
import CheckIcon from '@mui/icons-material/Check';
import { Link } from 'react-router-dom';
export default function OffcanvasListItems({ StateShowListItems, handleClose, ...props }) {
    const inputRef = useRef(null); // Tạo ref cho input
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);
    const [images, setImages] = useState([])
    const [productName, setProductName] = useState("")
    const [description, setdescription] = useState("")
    const [stateCheckButton, setstateCheckButton] = useState(false)
    const [notion, setNotion] = useState(false)
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 1000);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const handleImageChange = (e) => {
        const images = Array.from(e.target.files);
        if (images.length <= 10) {
            images.map((image) => {
                const urlImage = URL.createObjectURL(image)
                setImages((e) => [...e, urlImage])
            })
            toast.success("successfuly! :)))))", {
                autoClose: 500,
            })
        } else {
            setNotion(true)
            const setNotionTimeOut = (notion) => {
                setNotion(notion)
            }
            setTimeout(setNotionTimeOut, 1500, false)

        }
        e.target.files = null;

    }

    const handleInputProductName = (e) => {
        setProductName(e.target.value)
    }
    const handleInputDescription = (e) => {
        setdescription(e.target.value)
    }

    const handleCheckButtonListItem = (e) => {
        setstateCheckButton(e.target.checked)

    }

    return (
        <>
            <Offcanvas show={StateShowListItems} onHide={handleClose} {...props} style={{
                width: isMobile ? '100%' : '35%',
                borderTopLeftRadius: isMobile ? '10px' : '15px',
                borderBottomLeftRadius: isMobile ? '10px' : '15px',
            }}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>List a new item</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div>
                        <div className='block-image-list-items-product'>
                            <div className='images-list-items-product'>
                                {images.length !== 0 ? (
                                    <div className='list-image-product-detail-page'>
                                        {images.length <= 10 ? (
                                            <>
                                                {images.slice(0, 10).map((img, index) => (
                                                    <div key={index}>
                                                        <div className='every-image-of-list'>
                                                            <img
                                                                src={img}
                                                                width={95}
                                                                height={103}
                                                                alt='image-product-page'
                                                            />
                                                        </div>
                                                    </div>
                                                ))}

                                                {images.length < 10 ? (
                                                    <div className='icon-button-add-image-list-items'>
                                                        <div>
                                                            <label
                                                                htmlFor='input-image'
                                                                className='custom-button-input-image'
                                                            >
                                                                <div>
                                                                    <AddCircleIcon />
                                                                </div>
                                                            </label>
                                                            <input
                                                                type='file'
                                                                id='input-image'
                                                                accept='image/*'
                                                                className='button-input-image'
                                                                multiple
                                                                hidden
                                                                onChange={handleImageChange}
                                                            />
                                                        </div>
                                                    </div>
                                                ) : null}

                                            </>
                                        ) : (
                                            null
                                        )}
                                    </div>
                                ) : (
                                    <div className='icon-button-add-image-list-items'>
                                        <div>
                                            <label
                                                htmlFor='input-image'
                                                className='custom-button-input-image'
                                            >
                                                <div>
                                                    <AddCircleIcon />
                                                </div>
                                            </label>
                                            <input
                                                type='file'
                                                id='input-image'
                                                accept='image/*'
                                                className='button-input-image'
                                                multiple
                                                hidden
                                                onChange={handleImageChange}
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className='charactor-image-list-items-product'>
                            <p><span style={notion ? { color: "red", fontSize: "90px" } : null}>max 10</span> images (4mb per image)</p>
                        </div>
                        <div className='product-name-input-place'>
                            <label htmlFor='lable-product-name'>
                                Product name
                            </label>
                            <div>
                                <input type='text' id='lable-product-name' onChange={handleInputProductName} maxLength={120}></input>
                            </div>
                            <p>{productName.length}/120</p>
                        </div>

                        <div className='Description-input-place'>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label style={{ fontWeight: "500" }}>Description</Form.Label>
                                    <Form.Control as="textarea" rows={5} onChange={handleInputDescription} maxLength={800} />
                                    <p style={{ textAlign: "end" }}>{description.length}/800</p>
                                </Form.Group>
                            </Form>
                        </div>
                        <div className='Price-input-place'>
                            <label htmlFor='lable-input-price-product' style={{ fontWeight: "500" }}>Price</label>
                            <div style={{ display: "flex" }}>
                                <input type='number' id='lable-input-price-product'></input>
                                <p>$</p>
                            </div>
                        </div>
                        <div className='check-agree-or-donnot-agree'>
                            <div>
                                <input type='checkbox' onChange={handleCheckButtonListItem}></input></div>
                            <p>I agree to receive or make partial cash payments to
                                complete barter exchanges when the values of the items
                                or services differ.</p>
                        </div>
                        <hr style={{ marginBottom: "15px", marginTop: '15px' }}></hr>
                        <div>
                            <p style={{ fontWeight: "500", margin: "0", marginBottom: "10px" }}>State</p>
                            <Form.Select aria-label="Default select example">
                                <option value="Services">Services</option>
                                <option value="Books">Books</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Vehicles">Vehicles</option>
                                <option value="Clothing">Clothing</option>
                                <option value="Real estate">Real estate</option>
                                <option value="Garden">Garden</option>
                                <option value="Games">Games</option>
                                <option value="Furniture">Furniture</option>
                                <option value="Sport">Sport</option>
                                <option value="Musical">Musical</option>
                                <option value="Other">Other</option>
                            </Form.Select>
                        </div>
                        <div style={{ marginTop: '15px' }}>
                            <p style={{ fontWeight: "500", margin: "0", marginBottom: "10px" }}>Condition</p>
                            <Form.Select aria-label="Default select example">
                                <option value="New">New</option>
                                <option value="Used">Used</option>
                            </Form.Select>
                        </div>
                        <div style={{ marginTop: '15px' }}>
                            <p style={{ fontWeight: "500", margin: "0", marginBottom: "10px" }}>Condition</p>
                            <Form.Select aria-label="Default select example">
                                <option value=" Arizona State University"> Arizona State University</option>
                                <option value="Alabama">Alabama</option>
                                <option value="Alaska">Alaska</option>
                                <option value="Arizona">Arizona</option>
                                <option value="Arkansas">Arkansas</option>
                                <option value="California">California</option>
                                <option value="Colorado">Colorado</option>
                                <option value="Connecticut">Connecticut</option>
                                <option value="Delaware">Delaware</option>
                                <option value="District of Columbia">District of Columbia</option>
                                <option value="Florida">Florida</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Hawaii">Hawaii</option>
                                <option value="daho">daho</option>
                                <option value="Illinois">Illinois</option>
                                <option value="Indiana">Indiana</option>
                                <option value="Iowa">Iowa</option>
                                <option value="daho">daho</option>
                                <option value="llinois">llinois</option>
                                <option value="Indiana">Indiana</option>
                                <option value="Iowa">Iowa</option>
                                <option value="Kansas">Kansas</option>
                                <option value="Kentucky">Kentucky</option>
                                <option value="Louisiana">Louisiana</option>
                               <option value="dLouisianaaho">Louisiana</option>
                                <option value="Maine">Maine</option>
                                <option value="Maryland">Maryland</option>
                                <option value="Massachusetts">Massachusetts</option>
                                <option value="Michigan">Michigan</option>
                                <option value="Minnesota">Minnesota</option>
                                <option value="Mississippi">Mississippi</option>
                                <option value="Missouri">Missouri</option>
                                <option value="Montana">Montana</option>
                                <option value="Nebraska">Nebraska</option>
                                <option value="Nevada">Nevada</option>
                                <option value="New Hampshire">New Hampshire</option>
                            </Form.Select>
                        </div>
                        <div style={{ display: "flex", marginTop: "20px", gap: "10px" }}>
                            <div><input type='checkbox' onChange={handleCheckButtonListItem}></input></div>
                            <p>Accept that people may offer products with lower prices
                                than your offer</p>
                        </div>
                        <div className={`button-list-item-import-product ${stateCheckButton ? '' : 'aria-disabled'}`}
                            style={{
                                pointerEvents: stateCheckButton ? 'auto' : 'none',
                                opacity: stateCheckButton ? 1 : 0.6,
                            }}>
                            <Link to={"/order-complete"} style={{textDecoration:'none'}}>
                                <div><CheckIcon /></div>
                                <p style={{ margin: '0' }}>List Item</p>
                            </Link>
                        </div>
                    </div>
                </Offcanvas.Body >
            </Offcanvas >
        </>
    )
}
