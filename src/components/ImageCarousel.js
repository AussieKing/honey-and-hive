import React from 'react';
import Slider from "react-slick";
import "../App.css";

function ImageCarousel() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };

    // Sample data
    const images = [
        { src: '../public/img/img1.jpg', name: "Image 1" },
        { src: "/path/to/image2.jpg", name: "Image 2" },
        { src: "/path/to/image3.jpg", name: "Image 3" },
        { src: "/path/to/image4.jpg", name: "Image 4" },
        { src: "/path/to/image5.jpg", name: "Image 5" },
        { src: "/path/to/image6.jpg", name: "Image 6" },
        { src: "/path/to/image7.jpg", name: "Image 7" },
        { src: "/path/to/image8.jpg", name: "Image 8" },
    ];

    return (
        <Slider {...settings}>
            {images.map((image, index) => (
                <div key={index} className="carousel-image-wrapper">
                    <img src={image.src} alt={image.name} />
                    <div className="carousel-image-overlay">
                        <p>{image.name}</p>
                    </div>
                </div>
            ))}
        </Slider>
    );
}

export default ImageCarousel;
