"use client";

import Slider, { Settings } from "react-slick";
import { CarouselProperties } from "./carousel-properties.interface";
import { CAROUSEL_DEFAULT_ITEM_NUMBER } from "./carousel.constant";

const settings: Settings = {
  arrows: true,
  speed: 2000,
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};

export const Carousel = ({
  className,
  isLoading,
  children,
}: CarouselProperties) => {
  const getDefaultRowNumber = (length: number) => {
    return Array.from({ length }, (v, k) => k + 1);
  };

  // placeholders
  const renderPlaceholders = () =>
    getDefaultRowNumber(CAROUSEL_DEFAULT_ITEM_NUMBER)?.map((itemNumber) => (
      <div key={`table-tr-placeholder-${itemNumber}`}>
        <span className="block bg-slate-900 rounded-md w-xlarge h-xlarge mx-auto"></span>
        <div className="p-2 px-16 w-full max-w-md">
          <span className="block bg-slate-900 rounded-xl w-full h-medium"></span>
        </div>
      </div>
    ));
  //

  return (
    <Slider {...settings} className={className}>
      {isLoading ? renderPlaceholders() : children}
    </Slider>
  );
};
