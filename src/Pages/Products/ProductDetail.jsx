import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Footer from "../../Components/Footter";
import { useGetSignfleProductQuery, useGetProductsQuery } from "../../redux/services/productSlice";

const ProductDetail = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const { data: product } = useGetSignfleProductQuery({ productId });
  const { data: products, error, isLoading } = useGetProductsQuery();

  const [count, setCount] = useState(0);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [reviews, setReviews] = useState(product?.reviews || []);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) {
    return <div className="text-center p-6">Product not found</div>;
  }

  const handleRating = (index) => setRating(index + 1);
  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count > 1 ? count - 1 : 0);
  const handleAddToCart = () => setCount(count === 0 ? 1 : count);
  const handleBuyNow = () => navigate("/checkout", { state: { product, count } });

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (reviewText.trim()) {
      setReviews([...reviews, { userName: "Anonymous", comment: reviewText, rating }]);
      setReviewText("");
      setRating(0);
    }
  };

  const handleNextImage = () => setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  const handlePrevImage = () => setCurrentImageIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));

  return (
    <>
      <div className="p-4 flex justify-center items-center bg-gray-100 min-h-screen">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-7xl p-6 transition-all duration-300 ease-in-out">
          {/* Product Image & Details - Full Width Layout */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Product Image */}
            <div className="relative w-full lg:w-1/2">
              <img
                src={product.images[currentImageIndex] || "https://via.placeholder.com/500"}
                alt={product.name}
                className="w-full h-[400px] object-cover rounded-lg transition-all duration-300 ease-in-out"
              />
              <button
                onClick={handlePrevImage}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full transition-all duration-300 ease-in-out hover:bg-gray-600"
              >
                <FiChevronLeft size={24} />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full transition-all duration-300 ease-in-out hover:bg-gray-600"
              >
                <FiChevronRight size={24} />
              </button>
            </div>

            {/* Product Details */}
            <div className="flex flex-col justify-between w-full lg:w-1/2">
              <h2 className="text-3xl font-semibold text-gray-800 mb-2">{product.name}</h2>
              <p className="text-lg font-semibold text-gray-700 mb-4"> Rs.{product.price}</p>
              <p className="text-gray-600 mb-4">{product.description || "No description available"}</p>

              <div className="mt-4 flex space-x-4">
                <button
                  onClick={handleAddToCart}
                  className="bg-[#2518BD] text-white p-3 rounded-lg w-full lg:w-auto transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  {count === 0 ? "Add to Cart" : `Added to Cart (${count})`}
                </button>
                <button
                  onClick={handleBuyNow}
                  className="bg-[#1B1290] text-white p-3 rounded-lg w-full lg:w-auto transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Reviews</h3>
            {reviews?.map((review, index) => (
              <div key={index} className="border-b py-4">
                <div className="flex justify-between">
                  <span className="font-semibold">{review.userName}</span>
                  <span className="text-yellow-500">{'★'.repeat(review.rating)}</span>
                </div>
                <p className="mt-2">{review.comment}</p>
              </div>
            ))}

            {/* Add Review Form */}
            <form onSubmit={handleSubmitReview} className="mt-6">
              <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                className="w-full p-3 border rounded-lg mb-4"
                placeholder="Write your review..."
                rows="4"
              ></textarea>
              <div className="flex items-center mb-4">
                {[0, 1, 2, 3, 4].map((index) => (
                  <span
                    key={index}
                    onClick={() => handleRating(index)}
                    className={`cursor-pointer text-2xl ${index < rating ? "text-yellow-500" : "text-gray-400"}`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <button type="submit" className="bg-[#1B1290] text-white p-3 rounded-lg w-full lg:w-auto">
                Submit Review
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Suggested Products Section */}
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">You May Also Like</h3>
          <div className="overflow-x-auto flex space-x-6">
            {products?.map((prod) => (
              <div
                key={prod.id}
                className="border p-4 rounded-lg shadow-lg max-w-xs flex flex-col transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                <img
                  src={prod.images?.[0] || "https://via.placeholder.com/150"}
                  alt={prod.name}
                  className="w-full h-[200px] object-cover rounded-lg mb-4"
                />
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{prod.name}</h4>
                <p className="text-lg text-[#2518BD] mb-2">Rs. {prod.price}</p>
                <button
                  onClick={() => navigate(`/product/${prod.id}`)}
                  className="bg-[#2518BD] text-white p-2 rounded-lg mt-auto transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  View Product
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetail;
