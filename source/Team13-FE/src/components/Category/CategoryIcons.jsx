import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './CategoryIcons.css';

import allIcon from '../../assets/home.png';
import serviceIcon from '../../assets/service.png';
import bookIcon from '../../assets/book.png';
import electronicsIcon from '../../assets/electronic.png';
import vehicleIcon from '../../assets/cars.png';
import clothingIcon from '../../assets/clothing.png';
import realEstateIcon from '../../assets/real estate.png';
import gardenIcon from '../../assets/garden.png';
import furnitureIcon from '../../assets/furniture.png';
import gameIcon from '../../assets/game.png';
import sportIcon from '../../assets/sport.png';
import musicalIcon from '../../assets/musical.png';
import ortherIcon from '../../assets/orther.png';

const categories = [
    { label: 'All', imageUrl: allIcon },
    { label: 'Services', imageUrl: serviceIcon },
    { label: 'Books', imageUrl: bookIcon },
    { label: 'Electronics', imageUrl: electronicsIcon },
    { label: 'Vehicles', imageUrl: vehicleIcon },
    { label: 'Clothing', imageUrl: clothingIcon },
    { label: 'Real estate', imageUrl: realEstateIcon },
    { label: 'Garden', imageUrl: gardenIcon },
    { label: 'Games', imageUrl: gameIcon },
    { label: 'Furniture', imageUrl: furnitureIcon },
    { label: 'Sport', imageUrl: sportIcon },
    { label: 'Musical', imageUrl: musicalIcon },
    { label: 'Other', imageUrl: ortherIcon },
];

export default function CategoryIcons({ onCategorySelect }) {
    return (
        <div className="category-icons-container">
            <Swiper spaceBetween={15} slidesPerView="auto" style={{ width: '100%' }}>
                {categories.map((category, index) => (
                    <SwiperSlide key={index} className="category-icon">
                        <div
                            className="icon-circle"
                            onClick={() => onCategorySelect(category.label)}
                            style={{ cursor: 'pointer' }}
                        >
                            <img src={category.imageUrl} alt={category.label} className="category-image" />
                        </div>
                        <p className="category-label">{category.label}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
