import React, { useState } from 'react';
import './FillterOffcanvas.css';

const categories = [
    { label: 'All', imageUrl: 'path/to/allIcon' },
    { label: 'Services', imageUrl: 'path/to/serviceIcon' },
    { label: 'Books', imageUrl: 'path/to/bookIcon' },
    { label: 'Electronics', imageUrl: 'path/to/electronicsIcon' },
    { label: 'Vehicles', imageUrl: 'path/to/vehicleIcon' },
    { label: 'Clothing', imageUrl: 'path/to/clothingIcon' },
    { label: 'Real estate', imageUrl: 'path/to/realEstateIcon' },
    { label: 'Garden', imageUrl: 'path/to/gardenIcon' },
    { label: 'Games', imageUrl: 'path/to/gameIcon' },
    { label: 'Furniture', imageUrl: 'path/to/furnitureIcon' },
    { label: 'Sport', imageUrl: 'path/to/sportIcon' },
    { label: 'Musical', imageUrl: 'path/to/musicalIcon' },
    { label: 'Other', imageUrl: 'path/to/ortherIcon' },
];

const states = [
    'Arizona State University',
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'District of Columbia',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
];

const conditions = ['New', 'Used'];

export default function FilterOffcanvas({ StateShowListItems, handleClose, onApplyFilter }) {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedState, setSelectedState] = useState('');
    const [selectedCondition, setSelectedCondition] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const handleApplyFilters = () => {
        const filters = {
            category: selectedCategory,
            state: selectedState,
            condition: selectedCondition,
            minPrice: minPrice ? parseFloat(minPrice) : null,
            maxPrice: maxPrice ? parseFloat(maxPrice) : null,
        };
        onApplyFilter(filters);
        handleClose();
    };

    return (
        <div className={`filter-offcanvas ${StateShowListItems ? 'show' : ''}`}>
            <div className="offcanvas-header">
                <h5>Filter by</h5>
                <button className="close-button" onClick={handleClose}>✕</button>
            </div>
            <div className="offcanvas-body">
                <div>
                    <label>Categories</label>
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        {categories.map((category, index) => (
                            <option key={index} value={category.label}>
                                {category.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>State</label>
                    <select
                        value={selectedState}
                        onChange={(e) => setSelectedState(e.target.value)}
                    >
                        <option value="">All States</option>
                        {states.map((state, index) => (
                            <option key={index} value={state}>
                                {state}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Condition</label>
                    <select
                        value={selectedCondition}
                        onChange={(e) => setSelectedCondition(e.target.value)}
                    >
                        <option value="">All Conditions</option>
                        {conditions.map((condition, index) => (
                            <option key={index} value={condition}>
                                {condition}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="price-filter">
                    <label>Price Range</label>
                    <div className="price-inputs">
                        <input
                            type="number"
                            placeholder="Min"
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="Max"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                        />
                    </div>
                </div>
                <div className="apply-button-container">
                    <button className="apply-button" onClick={handleApplyFilters}>
                        Apply
                    </button>
                </div>
            </div>
        </div>
    );
}
