import React, { useEffect, useState } from 'react';

const images = [
    '/images/slide1.jpg',
    '/images/slide2.jpg',
    '/images/slide3.jpg'
];

export default function BackgroundSlideshow() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="background-slideshow"
            style={{
                backgroundImage: `url(${images[currentImageIndex]})`,
                transition: 'background-image 1s ease-in-out',
                height: '100vh',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            {/* Add your content here */}
        </div>
    );
}