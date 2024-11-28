import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";  // Importing the left and right arrows
import Nav from "../../Components/Nav"; // Import Navbar
import Footer from "../../Components/Footter"; // Corrected spelling of Footer

import AuthImage from "../../Utiles/AuthImage.jpg";
import BgRegImg from "../../Utiles/BgRegImg.jpg";
import RegBgImg from "../../Utiles/RegBgImg.jpg";
import TailorReg from "../../Utiles/TailorReg.jpg";
import person1 from "../../Utiles/person1.jpg";
import person2 from "../../Utiles/person2.jpg";
import LandingPageImage from "../../Utiles/LandingPageImage.png";
import Ipi from "../../Utiles/lpi.jpg";

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

  const [currentImageIndex, setCurrentImageIndex] = useState(0); // State to track current image index

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

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.imageUrl.length); // Loop through images
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.imageUrl.length - 1 : prevIndex - 1
    ); // Loop through images
  };

  // Sample products data - in a real scenario, you would fetch these from an API or pass them as props
  const products = [
    {
      id: 1,
      name: "Men's Casual Shirt",
      price: 29.99,
      imageUrl: [AuthImage, person1], // Array of images
    },
    {
      id: 2,
      name: "Men's Leather Jacket",
      price: 79.99,
      imageUrl: [BgRegImg, person2],
    },
    {
      id: 3,
      name: "Men's Sports Shoes",
      price: 59.99,
      imageUrl: [RegBgImg, LandingPageImage],
    },
    {
      id: 4,
      name: "Men's Watch",
      price: 99.99,
      imageUrl: [TailorReg, Ipi],
    },
  ];

  return (<>
    <Nav />
    <div className="p-4 flex justify-center items-center bg-gray-100 min-h-screen">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl p-6">
                       {/* Image Carousel */}
        <div className="w-full flex justify-center items-center relative mb-6">
          <img
            src={product.imageUrl[currentImageIndex] || "https://via.placeholder.com/500"}
            alt={product.name}
            className="w-full max-w-lg h-[400px] object-cover rounded-lg"
          />
          {/* Left Arrow */}
          <button
            onClick={handlePrevImage}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          >
            <FiChevronLeft size={24} />
          </button>
          {/* Right Arrow */}
          <button
            onClick={handleNextImage}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          >
            <FiChevronRight size={24} />
          </button>
        </div>


        {/* Product Info Section */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">{product.name}</h2>
          <p className="text-lg font-semibold text-gray-700 mb-4">$ {product.price}</p>
          <p className="text-gray-600 mb-4">{product.description || "No description available"}</p>

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

        {/* Product Additional Details Section */}
        <div className="mt-8 space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Product Details</h3>
          <div className="space-y-2">
            <p><strong>Product Name:</strong> {product.name}</p>
            <p><strong>Gender:</strong> {product.gender || "Male"}</p>
            <p><strong>Age:</strong> {product.ageRange || "14 - 22"}</p>
            <p><strong>Size:</strong> {product.size || "M"}</p>
            <p><strong>Measurement:</strong> {product.measurement || "Add measurement"}</p>
            <p><strong>Location:</strong> {product.location || "Bangalore"}</p>
            <p><strong>Color:</strong> {product.color || "Yellow"}</p>
            <p><strong>Description:</strong> {product.longDescription || "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"}</p>
          </div>
        </div>

       {/* More Suggestions Section */}
<div className="mt-12">
  <h3 className="text-xl font-semibold text-gray-800 mb-4">More Suggestions</h3>
  <div className="overflow-x-auto">
    <div className="flex space-x-4 min-w-max">
      {products.map((prod) => (
        <div
          key={prod.id}
          className="border p-4 rounded-lg shadow-lg max-w-xs flex flex-col"
        >
          <img
            src={prod.imageUrl[0] || "https://via.placeholder.com/150"}
            alt={prod.name}
            className="w-full h-[150px] object-cover rounded-lg mb-4"
          />
          <h4 className="text-lg font-semibold text-gray-800 mb-2">{prod.name}</h4>
          <p className="text-lg text-[#2518BD] mb-2">$ {prod.price}</p>

          {/* Add to Cart Button aligned at the bottom */}
          <button
            onClick={() => navigate(`/product/${prod.id}`, { state: { product: prod } })}
            className="bg-[#2518BD] text-white p-2 rounded-lg mt-auto"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
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
    <Footer />
    </>
  );
};

export default ProductDetail;
