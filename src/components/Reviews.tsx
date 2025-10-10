import { Product } from "@/lib/types";
import { img } from "framer-motion/client";
import { Star, ThumbsUp, ThumbsDown } from "lucide-react";
import { useState } from "react";

const reviewImages = [
  "/reviewImages/1.jpeg",
  "/reviewImages/2.jpeg",
  "/reviewImages/3.jpeg",
  "/reviewImages/4.jpeg",
  "/reviewImages/5.jpeg",
  "/reviewImages/6.jpeg",
  "/reviewImages/7.jpeg",
  "/reviewImages/8.jpeg",
];

export default function Reviews({ product }: { product: Product }) {
  const [showAll, setShowAll] = useState(false);

  const displayedReviews = showAll
    ? product.reviews
    : product.reviews.slice(0, 3);

  return (
    <div className="space-y-1 md:space-y-3 flex flex-col md:flex-row gap-3">
      <div className="bg-white h-fit md:sticky md:top-12   py-2 px-3 md:px-6 md:py-4 rounded-xl shadow-sm border border-gray-100">
        <div className="flex  justify-between mb-2 md:mb-4 flex-col  ">
          <h3 className="text-lg font-semibold">Customer Reviews</h3>
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(product.rating)
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-semibold">{product.rating}</span>
            <span className="text-xs text-gray-600">
              ({product.reviews.length} reviews)
            </span>
          </div>
        </div>

        <div className="md:gap-3 md:mb-4 flex flex-col justify-between">
          {[5, 4, 3, 2, 1].map((rating) => {
            const total = product.reviews.length;
            const count = product.reviews.filter(
              (r) => r.rating === rating
            ).length;
            const percentage = Math.round(total ? (count / total) * 100 : 0);

            return (
              <div className="flex items-center space-px-2 gap-1" key={rating}>
                <span className="text-xs text-gray-600">{rating}</span>
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-[80%]">
                  <div
                    className={`bg-yellow-400 h-2 rounded-full `}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="text-sm text-gray-600 ">{percentage}%</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="">
        <div className="gap-2 overflow-x-auto pb-4 space-y-2 md:grid lg:grid-cols-2">
          {displayedReviews.map((review, i) => (
            <div
              key={i}
              className="relaive bg-white border min-w-80 border-gray-100 py-2 px-3 md:px-6 md:py-4 rounded-xl shadow-sm  flex flex-col justify-between"
            >
              <div className="flex items-start justify-between mb-4 flex-col">
                <div className="w-full">
                  <div className="flex items-center space-x-4">
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold text-xs md:text-sm  text-gray-900">
                          {review.username}
                        </h4>
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          Verified Purchase
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${
                                i < Math.floor(review.rating)
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-500">
                          {review.date ??
                            new Date(review.date)
                              .toLocaleDateString()
                              .replaceAll("/", "-")}

                          {/* {new Date(review.date).toLocaleDateString()??"false"} */}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" aspect-[4/6] max-h-20 overflow-hidden my-3">
                  <img
                    src={reviewImages[i]}
                    className="size-full object-cover"
                  />
                </div>
                <div className="mt-2 font-medium text-xs text-gray-900">
                  {review.comment}
                </div>
              </div>

              <div className="  flex items-center justify-between mt-2 border-t-gray-500">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-green-600 transition-colors">
                    <ThumbsUp className="h-4 w-4" />
                    <span className="text-xs">Helpful</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-red-600 transition-colors">
                    <ThumbsDown className="h-4 w-4" />
                    <span className="text-xs">Not helpful</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {product.reviews.length > 3 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="w-full text-center text-sm font-medium text-gray-800 hover:text-blue-500 hover:underline mt-2"
          >
            {showAll ? "Show Less Reviews" : "Show All Reviews"}
          </button>
        )}
      </div>
    </div>
  );
}
