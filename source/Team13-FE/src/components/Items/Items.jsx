import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Items.css';
import CategoryIcons from '../Category/CategoryIcons';
import OffcanvasListItems from '../../components/clientComponent/OffcanvasListItems/OffcanvasListItems'; // Import OffcanvasListItems component

export default function Items() {
    const [itemsData, setItemsData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const [showOffcanvas, setShowOffcanvas] = useState(false); // State to control Offcanvas visibility
    const itemsPerPage = 15;

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://673164717aaf2a9aff1083a5.mockapi.io/Items');
                if (!response.ok) throw new Error(`Status: ${response.status}`);
                const data = await response.json();
                setItemsData(data);
                setFilteredData(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const searchQuery = queryParams.get('search')?.toLowerCase();
        const categoryFromUrl = queryParams.get('category');

        if (categoryFromUrl) {
            setSelectedCategory(categoryFromUrl);
            filterItemsByCategory(categoryFromUrl);
        } else if (searchQuery) {
            filterItemsBySearch(searchQuery);
        } else {
            setFilteredData(itemsData);
        }
    }, [location.search, itemsData]);

    const filterItemsByCategory = (category) => {
        if (category === 'All') {
            setFilteredData(itemsData);
        } else {
            const filteredItems = itemsData.filter(item => item.category.toLowerCase() === category.toLowerCase());
            setFilteredData(filteredItems);
        }
    };

    const filterItemsBySearch = (query) => {
        const filteredItems = itemsData.filter(item =>
            item.itemName.toLowerCase().includes(query) ||
            item.category.toLowerCase().includes(query)
        );
        setFilteredData(filteredItems);
    };

    // Define handleCategorySelect to update selectedCategory and filter items
    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        filterItemsByCategory(category);
    };

    // Calculate the items to show on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    // Handle page change
    const handlePageChange = (page) => setCurrentPage(page);

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    // Toggle Offcanvas visibility
    const handleOpenOffcanvas = () => setShowOffcanvas(true);
    const handleCloseOffcanvas = () => setShowOffcanvas(false);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;


    const handleViewProductDetail = (id) => {
        navigate(`/product-detail/${id}`)
    }
    return (
        <div className="offers-container">
            <CategoryIcons onCategorySelect={handleCategorySelect} /> {/* Pass handleCategorySelect to CategoryIcons */}
            <div className="header-container">
                <h2 className="all-offer-title">All offers</h2>
                <button className="list-new-item-button" onClick={handleOpenOffcanvas}>
                    + List a new item
                </button>
            </div>
            <div className="items-container">
                {currentItems.length ? (
                    currentItems.map(item => (
                        <div key={item.id} className="item-card">
                            <div className="item-image-section" onClick={() => handleViewProductDetail(item.id)}>
                                <img src={item.imageSrc} alt={item.itemName} className="item-image" />
                                <div className="item-owner">{item.ownerName}'s offer</div>
                                <div className="item-offer-icon-container">
                                    <div className="offer-icon">+</div>
                                    <div className="item-offer-text">Make an offer</div>
                                </div>
                            </div>
                            <div className="item-details">
                                <div className="item-value">
                                    valued: <strong>${item.itemValue}</strong> 💸 Partial Cash
                                </div>
                                <div className="item-description">{item.itemName}</div>
                                <div className="item-location">📍 {item.itemLocation}</div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>No items available in this category</div>
                )}
            </div>
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
            {/* OffcanvasListItems Component */}
            <OffcanvasListItems 
                StateShowListItems={showOffcanvas} 
                handleClose={handleCloseOffcanvas} 
            />
        </div>
    );
}
