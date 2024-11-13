import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { FaChevronLeft } from "react-icons/fa";  // Importing the go back icon

const ProductDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {}; // Access product from state

  if (!product) {
    return <div>Product not found</div>; // Prevent the app from breaking if no product is passed
  }

  const [count, setCount] = useState(0);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState(""); // For new reviews
  const [reviews, setReviews] = useState(product.reviews || []); // Use product's initial reviews

  const handleRating = (index) => {
    setRating(index + 1);
  };

  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => {
    if (count > 1) setCount(count - 1);
    else setCount(0);
  };

  const handleAddToCart = () => {
    if (count === 0) {
      setCount(1); // If no quantity, set it to 1 when "Add to Cart" is clicked
    } else {
      alert("Item already in the cart");
    }
  };

  const handleBuyNow = () => {
    navigate("/checkout", { state: { product, count } });
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (reviewText.trim()) {
      const newReview = {
        userName: "Anonymous", // This could be replaced by a real user name
        comment: reviewText,
        rating,
      };
      setReviews([...reviews, newReview]);
      setReviewText(""); // Reset review input
      setRating(0); // Reset rating after review is submitted
    } else {
      alert("Please enter a review text.");
    }
  };

  return (
    <div className="p-4 flex justify-center items-center bg-gray-100 min-h-screen">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl p-6">
        {/* Go Back Button */}
        <button
          onClick={() => navigate("/products")}
          className="flex items-center text-[#2518BD] mb-6 hover:underline"
        >
          <FaChevronLeft size={20} className="mr-2" /> Go Back
        </button>

        <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8">
          <div className="w-full lg:w-1/2">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-[400px] object-cover rounded-lg mb-4" // Fixed height and object-fit
            />
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-800 mb-2">{product.name}</h2>
            <p className="text-lg font-semibold text-gray-700 mb-4">$ {product.price}</p>
            <p className="text-gray-600 mb-4">{product.description}</p>

            <div className="flex items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800 mr-4">Customer Ratings</h3>
              <div className="flex">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={`cursor-pointer text-2xl ${rating > index ? 'text-yellow-500' : 'text-gray-300'}`}
                    onClick={() => handleRating(index)}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>

            {/* Add to Cart Section */}
            <div className="mt-4 flex space-x-4">
              <button
                onClick={handleAddToCart}
                className="bg-[#2518BD] text-white p-3 rounded-lg w-full lg:w-auto"
              >
                {count === 0 ? "Add to Cart" : `Added to Cart (${count})`}
              </button>
              <button
                onClick={handleBuyNow}
                className="bg-[#1B1290] text-white p-3 rounded-lg w-full lg:w-auto"
              >
                Buy Now
              </button>
            </div>

            {/* Increment and Decrement buttons */}
            {count > 0 && (
              <div className="mt-6 flex items-center space-x-4">
                <button
                  onClick={decrementCount}
                  className="px-4 py-2 bg-gray-300 text-black font-semibold rounded-full"
                >
                  -
                </button>
                <span className="text-lg font-semibold">{count}</span>
                <button
                  onClick={incrementCount}
                  className="px-4 py-2 bg-gray-300 text-black font-semibold rounded-full"
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Customer Reviews</h3>
          <div className="space-y-4">
            {reviews.map((review, index) => (
              <div key={index} className="border-b pb-4 mb-4">
                <p className="font-semibold text-gray-800">{review.userName}</p>
                <p className="text-sm text-gray-500 mb-2">{review.comment}</p>
                <p className="text-sm text-gray-400">Rating: {review.rating} stars</p>
              </div>
            ))}
          </div>

          {/* Add New Review Section */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Add Your Review</h3>
            <div className="flex items-center mb-4">
              <h4 className="text-lg font-semibold text-gray-800 mr-4">Your Rating:</h4>
              <div className="flex">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={`cursor-pointer text-2xl ${rating > index ? 'text-yellow-500' : 'text-gray-300'}`}
                    onClick={() => handleRating(index)}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>

            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg mb-4"
              rows="4"
              placeholder="Write your review here..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            ></textarea>
            <button
              onClick={handleSubmitReview}
              className="bg-[#2518BD] text-white p-3 rounded-lg"
            >
              Submit Review
            </button>
          </div>
        </div>

        {/* Questions Section */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Questions about this product:</h3>
          <ul className="list-disc list-inside text-gray-600">
            {product.questions && product.questions.map((question, index) => (
              <li key={index}>{question}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
