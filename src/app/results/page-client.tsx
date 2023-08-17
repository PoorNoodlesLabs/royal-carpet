"use client";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";

export default function ResultsPageClient({ reviews }: any) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 grid-gap-2">
      {reviews &&
        reviews.map((review, i) => {
          return (
            <div className="p-4 leading-relaxed" key={review.author_name}>
              {review.author_name && <h3 className="">{review.author_name}</h3>}
              <p className="text-gray-600 italic">{review.text}</p>
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
    </div>
  );
}
