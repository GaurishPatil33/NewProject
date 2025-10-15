import { Product, Review } from "@/lib/types";
import { Star, ThumbsUp, ThumbsDown, X } from "lucide-react";
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
  const [selectedReview, setSelectedReview] = useState<
    Product["reviews"][0] | null
  >();

  const displayedReviews = showAll
    ? product.reviews
    : product.reviews.slice(0, 3);

  // const imageModal = () => <div className="inset-0 ">
  //   <div className="w-full md:w-150">{selectedReview?.}</div>
  // </div>;

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
                    onClick={() => setSelectedReview(review)}
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

      {/* --- Modal for review image --- */}
      {selectedReview && (
        <div
          className="fixed inset-0 z-50 bg-black/40 bg-opacity-95 flex items-center justify-center"
          onClick={() => setSelectedReview(null)}
        >
          {/* <button
            onClick={()=>setSelectedReview(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          >
            <X className="w-8 h-8" />
          </button> */}
          {/* 
          {selectedReview?.image?.length > 1 && (
            <>
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 text-white hover:text-gray-300 z-10"
              >
                <ChevronLeft className="w-10 h-10" />
              </button>
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 text-white hover:text-gray-300 z-10"
              >
                <ChevronRight className="w-10 h-10" />
              </button>
            </>
          )} */}

          <div
            className="relative w-full h-full flex flex-col  max-w-120 max-h-200 mx-auto py-4 bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedReview(null)}
              className="absolute top-4 right-4 text-black hover:text-gray-300 z-10"
            >
              <X className="w-8 h-8" />
            </button>
            {/* Image Section */}
            <div className="flex-1 flex items-center justify-center">
              <div className="relative">
                <img
                  src={
                    reviewImages[product.reviews.indexOf(selectedReview)] ||
                    reviewImages[0]
                  }
                  alt="Review"
                  className="max-h-[400px] max-w-full object-contain"
                />
                {/* {allReviewImages.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm">
                    {selectedReviewImageIndex + 1} / {allReviewImages.length}
                  </div>
                )} */}
              </div>
            </div>

            {/* Review Info Section */}
            <div className="w-full bg-white lg:bg-opacity-95 rounded-lg p-6 mt-4  overflow-y-auto max-h-[80vh]">
              <h3 className="text-lg font-semibold mb-4">Review Details</h3>

              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-lg font-medium text-white">
                    {selectedReview.username.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    {selectedReview.username}
                  </p>
                  {/* {selectedReview.verified && ( */}
                  <span className="text-xs text-green-600 flex items-center">
                    <svg
                      className="w-3 h-3 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Verified Purchase
                  </span>
                  {/* )} */}
                </div>
              </div>

              <div className="flex items-center space-x-2 mb-3">
                <div className="flex items-center space-x-1">
                  {/* {renderStars(selectedReview.rating)} */}
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(selectedReview.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="font-medium text-gray-700">
                  {selectedReview.rating}/5
                </span>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                {selectedReview.comment}
              </p>

              <div className="text-sm text-gray-500 mb-4">
                Reviewed on {selectedReview.date}
              </div>

              {/* {selectedReview.images && selectedReview.images.length > 1 && (
                <div className="border-t pt-4">
                  <h4 className="text-sm font-medium mb-3">All Images ({selectedReview.images.length})</h4>
                  <div className="grid grid-cols-4 gap-2">
                    {selectedReview.images.map((img: string, idx: number) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setSelectedReviewImageIndex(idx);
                          setSelectedReviewImage(img);
                        }}
                        className={`border-2 rounded-lg overflow-hidden ${
                          idx === selectedReviewImageIndex ? 'border-blue-500' : 'border-gray-200'
                        }`}
                      >
                        <img src={img} alt={`Review ${idx + 1}`} className="w-full h-16 object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              )} */}

              <div className="border-t pt-4 mt-4">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <ThumbsUp className="w-4 h-4" />
                  <span className="text-sm">
                    Helpful
                    {/* ({selectedReview.helpful ?? 0}) */}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
