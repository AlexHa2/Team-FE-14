import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CheckIcon from "@mui/icons-material/Check";

export default function AddItemDialog({ show, onClose, onSave, product }) {
    const [productName, setProductName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [category, setCategory] = useState("");
    const [condition, setCondition] = useState("");
    const [location, setLocation] = useState("");

    useEffect(() => {
        if (product) {
            setProductName(product.productName || "");
            setDescription(product.description || "");
            setPrice(product.price || "");
            setImageUrl(product.images?.[0] || "");
            setCategory(product.category || "");
            setCondition(product.condition || "");
            setLocation(product.location || "");
        } else {
            resetForm();
        }
    }, [product]);

    const resetForm = () => {
        setProductName("");
        setDescription("");
        setPrice("");
        setImageUrl("");
        setCategory("");
        setCondition("");
        setLocation("");
    };

    const handleSave = () => {
        if (!productName || !description || !price || !imageUrl) {
            alert("Please fill in all required fields!");
            return;
        }

        const newItem = {
            productName,
            description,
            price: parseFloat(price),
            images: [imageUrl],
            category,
            condition,
            location, // Updated field for location
        };

        onSave(newItem);
        resetForm();
    };

    return (
        <Modal show={show} onHide={onClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>{product ? "Edit Item" : "Add Item"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    {/* Image URL Input */}
                    <Form.Group controlId="formImageUrl" className="mb-3">
                        <Form.Label>Image URL</Form.Label>
                        <div className="d-flex align-items-center">
                            <AddCircleIcon className="me-2" />
                            <Form.Control
                                type="text"
                                placeholder="Enter image URL"
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)}
                                required
                            />
                        </div>
                    </Form.Group>

                    {/* Product Name */}
                    <Form.Group controlId="formProductName" className="mb-3">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control
                            type="text"
                            maxLength="120"
                            placeholder="Enter product name"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            required
                        />
                        <Form.Text>{productName.length}/120</Form.Text>
                    </Form.Group>

                    {/* Description */}
                    <Form.Group controlId="formDescription" className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={4}
                            maxLength="800"
                            placeholder="Enter product description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                        <Form.Text>{description.length}/800</Form.Text>
                    </Form.Group>

                    {/* Price */}
                    <Form.Group controlId="formPrice" className="mb-3">
                        <Form.Label>Price</Form.Label>
                        <div className="d-flex">
                            <Form.Control
                                type="number"
                                placeholder="Enter price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                required
                            />
                            <span className="ms-2 align-self-center">$</span>
                        </div>
                    </Form.Group>

                    {/* Category */}
                    <Form.Group controlId="formCategory" className="mb-3">
                        <Form.Label>Category</Form.Label>
                        <Form.Select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="">Select category</option>
                            <option value="Books">Books</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Furniture">Furniture</option>
                            <option value="Clothing">Clothing</option>
                            <option value="Other">Other</option>
                        </Form.Select>
                    </Form.Group>

                    {/* Condition */}
                    <Form.Group controlId="formCondition" className="mb-3">
                        <Form.Label>Condition</Form.Label>
                        <Form.Select
                            value={condition}
                            onChange={(e) => setCondition(e.target.value)}
                        >
                            <option value="">Select condition</option>
                            <option value="New">New</option>
                            <option value="Used">Used</option>
                        </Form.Select>
                    </Form.Group>

                    {/* Location */}
                    <Form.Group controlId="formLocation" className="mb-3">
                        <Form.Label>Location</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleSave}>
                    <CheckIcon className="me-2" />
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
