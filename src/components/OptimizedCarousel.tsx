"use client";
import Slider from "react-slick";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export const OptimizedCarousel = ({ content }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 5000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: typeof window !== "undefined" && window.screen.width >= 1024,
    lazyLoad: true,
  };
  return (
    <Slider {...settings}>
      {content.map((review, i) => {
        return (
          <div
            className="p-4 leading-relaxed bg-gray-200"
            key={review.title + i}
          >
            {review.title && <h3>{review.title}</h3>}
            <p className="italic line-clamp">{review.text}</p>
            <h4 className="font-bold">- {review.author_name}</h4>
            <span>
              {review.rating && (
                <Rating
                  initialRating={review.rating}
                  emptySymbol={<AiOutlineStar className="text-yellow-500" />}
                  fullSymbol={<AiFillStar className="text-yellow-500" />}
                />
              )}
            </span>
            <a
              href={review.author_url}
              target="_blank"
              className="cursor-pointer"
            >
              <p className="text-sm text-blue-600">
                {review.relative_time_description}
              </p>
            </a>
          </div>
        );
      })}
    </Slider>
    // </Carousel>
  );
};

export default OptimizedCarousel;
