import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./LandingCarousel.css";
import photo2 from "../images/photo2.jpg";
import photo3 from "../images/photo3.jpg";
import photo4 from "../images/photo4.jpg";
import photo6 from "../images/photo6.jpg";
import photo7 from "../images/photo7.jpg";

export default function BackgroundSlideshow() {
     const carouselRef = useRef(null);
     const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
   
     useEffect(() => {
       const handleResize = () => {
         setIsMobile(window.innerWidth <= 640);
       };
   
       window.addEventListener("resize", handleResize);
       return () => window.removeEventListener("resize", handleResize);
     }, []);
   
     useEffect(() => {
       const handleKeyDown = (event) => {
         if (event.key === "ArrowLeft") {
           carouselRef.current.decrement();
         } else if (event.key === "ArrowRight") {
           carouselRef.current.increment();
         }
       };
   
       window.addEventListener("keydown", handleKeyDown);
       return () => window.removeEventListener("keydown", handleKeyDown);
     }, []);

    return (
   <div className="relative">
      <Carousel
        ref={carouselRef}
        showThumbs={false}
        autoPlay
        infiniteLoop
        showArrows={!isMobile}
        showStatus={false}
        swipeable={true}
        emulateTouch={true}
        interval={5000}
        stopOnHover={true}
        className="carousel-container"
      >
        <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen">
          <img
            src={photo2}
            alt="Slide 1"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
            <div className="h-full flex flex-col items-start justify-center p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="flex flex-col">
               
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen">
          <img
            src={photo3}
            alt="Slide 2"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
            <div className="h-full flex flex-col items-start justify-center p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="flex flex-col">

              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen">
          <img
            src={photo4}
            alt="Slide 3"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
            <div className="h-full flex flex-col items-start justify-center p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="flex flex-col">

              </div>
            </div>
         
          </div>
        </div>
        <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen">
          <img
            src={photo6}
            alt="Slide 3"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
            <div className="h-full flex flex-col items-start justify-center p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="flex flex-col">

              </div>
            </div>
         
          </div>
        </div>

        <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen">
          <img
            src={photo7}
            alt="Slide 3"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
            <div className="h-full flex flex-col items-start justify-center p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="flex flex-col">

              </div>
            </div>
         
          </div>
        </div>
      </Carousel>

      <div className="absolute bottom-8 right-8 z-50">
        <div className="group relative">

          <div
            className="absolute bottom-full right-0 mb-2 w-64 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div
              className="bg-white/10 backdrop-blur-md text-white p-4 rounded-lg 
                          border border-white/20 shadow-xl"
            >
 
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}