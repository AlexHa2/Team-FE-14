import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MyListings.css';
import AddItemDialog from './AddItemDialog';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const API_URL = "https://66937520c6be000fa07b9d27.mockapi.io/products";

export default function MyListings() {
    const [products, setProducts] = useState([]);
    const [showAddDialog, setShowAddDialog] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, []);

    const handleOpenAddDialog = (product = null) => {
        setCurrentProduct(product);
        setShowAddDialog(true);
    };

    const handleCloseAddDialog = () => {
        setShowAddDialog(false);
        setCurrentProduct(null);
    };

    const handleAddProduct = async (newProduct) => {
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newProduct),
            });
            const createdProduct = await response.json();
            setProducts([createdProduct, ...products]);
            handleCloseAddDialog();
        } catch (error) {
            console.error("Error adding product:", error);
        }
    };

    const handleUpdateProduct = async (updatedProduct) => {
        try {
            const response = await fetch(`${API_URL}/${updatedProduct.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedProduct),
            });
            const savedProduct = await response.json();
            setProducts(products.map(product => product.id === savedProduct.id ? savedProduct : product));
            handleCloseAddDialog();
        } catch (error) {
            console.error("Error updating product:", error);
        }
    };

    const handleDeleteProduct = async (id) => {
        try {
            await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
            setProducts(products.filter(product => product.id !== id));
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    const handleViewProductDetail = (id) => {
        navigate(`/product-detail/${id}`);
    };

    return (
        <div className="offers-container">
            <div className="header-container">
                <h2 className="all-offer-title">My Listings</h2>
                <button className="list-new-item-button" onClick={() => handleOpenAddDialog()}>
                    + List a new item
                </button>
            </div>
            <div className="items-container">
                {products.length ? (
                    products.map(product => (
                        <div key={product.id} className="item-card">
                            <div className="item-image-section" onClick={() => handleViewProductDetail(product.id)}>
                                <img 
                                    src={product.images && product.images.length > 0 ? product.images[0] : 'https://via.placeholder.com/250'} 
                                    alt={product.productName || "Product"} 
                                    className="item-image" 
                                />
                                <div className="item-owner">{product.ownerName || 'Owner'}'s offer</div>
                                <div className="item-offer-icon-container">
                                    <div className="offer-icon">+</div>
                                    <div className="item-offer-text">Make an offer</div>
                                </div>
                            </div>
                            <div className="item-details">
                                <div className="item-value">
                                    valued: <strong>${product.price}</strong> 💸 Partial Cash
                                </div>
                                <div className="item-description">{product.productName}</div>
                                <div className="item-location">📍 {product.location || 'Location'}</div>
                            </div>
                            <div className="item-actions">
                                <button onClick={() => handleOpenAddDialog(product)}>
                                    <EditIcon />
                                </button>
                                <button onClick={() => handleDeleteProduct(product.id)}>
                                    <DeleteIcon />
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>No products available</div>
                )}
            </div>
            <AddItemDialog 
                show={showAddDialog} 
                onClose={handleCloseAddDialog} 
                onSave={currentProduct ? handleUpdateProduct : handleAddProduct}
                product={currentProduct}
            />
        </div>
    );
}
