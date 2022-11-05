import React from "react";

import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Carousel = () => {
  //   const images = [
  //     "https://ampersandportfolio.imgix.net/Fisto%20-%20Phootography-logo%20resized2.jpg?&auto=compress,format",
  //     "https://ampersandportfolio.imgix.net/Moville_website%20_1%20resized2.jpg?&auto=compress,format",
  //     "https://ampersandportfolio.imgix.net/T-shirt%20Black%20resized2.jpg?&auto=compress,format",
  //   ];

  const slideImages = [
    {
      url: "https://ampersandportfolio.imgix.net/Dhanesvara%20-%20B%20-%20flyer%20resized2.jpg?&auto=compress,format",
      caption: "Flyer Design",
    },
    {
      url: "https://ampersandportfolio.imgix.net/Fisto%20-%20Phootography-logo%20resized2.jpg?&auto=compress,format",
      caption: "Logo Design",
    },
    {
      url: "https://ampersandportfolio.imgix.net/Moville_website%20_1%20resized2.jpg?&auto=compress,format",
      caption: "Website Design",
    },
    {
      url: "https://ampersandportfolio.imgix.net/T-shirt%20Black%20resized2.jpg?&auto=compress,format",
      caption: "T-Shirt Design",
    },
  ];

  // Need the custom properties of zoom slideshow
  const zoomInProperties = {
    indicators: true,
    scale: 1.2,
    duration: 5000,
    transitionDuration: 500,
    infinite: true,

    // Custom prev arrow btn
    prevArrow: (
      <div style={{ width: "30px", marginRight: "-30px", cursor: "pointer" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#2e2e2e"
        >
          <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
        </svg>
      </div>
    ),

    // Custom next arrow btn
    nextArrow: (
      <div style={{ width: "30px", marginLeft: "-30px", cursor: "pointer" }}>
        <svg
          xmlns="https://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#2e2e2e"
        >
          {/* This is simple location path */}
          <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
        </svg>
      </div>
    ),
  };

  return (
    // <section>
    //   <div className="relative">
    //     {/* <img
    //       src="https://ampersandportfolio.imgix.net/asthetic2.png"
    //       alt="Sense of Creativity"
    //     /> */}
    //     <ul id="slider">
    //       <li className="h-[50vh] relative">
    //         <img
    //           className="h-full w-full object-cover"
    //           src="https://ampersandportfolio.imgix.net/Dhanesvara%20-%20B%20-%20flyer%20resized2.jpg?&auto=compress,format"
    //           alt="Dhanesvara - B Flyer"
    //         />
    //         <div className="absolute top-0 left-0 h-full w-full flex">
    //           <h2 className="text-4xl font-bold text-white my-auto w-full text-center px-20">
    //             Flyer Design
    //           </h2>
    //         </div>
    //       </li>
    //       <li className="h-[50vh] relative hidden">
    //         <img
    //           className="h-full w-full object-cover"
    //           src="https://ampersandportfolio.imgix.net/Fisto%20-%20Phootography-logo%20resized2.jpg?&auto=compress,format"
    //           alt="Fisto Photography Logo"
    //         />
    //         <div className="absolute top-0 left-0 h-full w-full flex">
    //           <h2 className="text-4xl font-bold text-white my-auto w-full text-center px-20">
    //             Logo Design
    //           </h2>
    //         </div>
    //       </li>
    //     </ul>
    //     <div className="absolute px-5 flex h-full w-full top-0 left-0">
    //       <div className="my-auto w-full flex justify-between">
    //         <button
    //           onClick=""
    //           className="bg-white p-3 rounded-full bg-opacity-80 shadow-lg"
    //         >
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke-width="1.5"
    //             stroke="currentColor"
    //             className="w-6 h-6"
    //           >
    //             <path
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
    //             />
    //           </svg>
    //         </button>
    //         <button
    //           onClick=""
    //           className="bg-white p-3 rounded-full bg-opacity-80 shadow-lg"
    //         >
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke-width="1.5"
    //             stroke="currentColor"
    //             className="w-6 h-6"
    //           >
    //             <path
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
    //             />
    //           </svg>
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    // Set the z-index to negative (we want it to display behind the Nav menu)
    <div className="relative -z-50">
      {/* Use Zoom tag by 3rd party and map each image with layout */}
      <Zoom {...zoomInProperties}>
        {slideImages.map((each, index) => (
          <div key={index} className="flex justify-center w-full h-full">
            <img
              src={each.url}
              className="w-3/4 object-cover rounded-lg shadow-xl"
            />
            <h1 className="absolute bottom-12 text-white text-3xl mb-2">
              <span>{each.caption}</span>
            </h1>
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default Carousel;
