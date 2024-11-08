import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook
import person1 from '../../Utiles/person1.jpg';
import person2 from '../../Utiles/person2.jpg';
import person3 from '../../Utiles/person1.jpg';

const Cart = () => {
  // Navigation hook
  const navigate = useNavigate();

  // Initial cart items with quantity property
  const initialItems = [
    { id: 1, name: 'Checkered shirt', size: 'M', color: 'white', price: 99.99, image: person1, quantity: 1 },
    { id: 2, name: 'Checkered shirt', size: 'M', color: 'white', price: 99.99, image: person2, quantity: 1 },
    { id: 3, name: 'Checkered shirt', size: 'M', color: 'white', price: 100.00, image: person3, quantity: 1 },
  ];

  const [items, setItems] = useState(initialItems);

  // Function to increase quantity
  const increaseQuantity = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  // Function to decrease quantity
  const decreaseQuantity = (id) => {
    setItems(items.map(item => 
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  // Function to remove item from the cart
  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Calculate subtotal, discount, and total
  const subTotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = subTotal * 0.2;
  const deliveryFee = 15.98;
  const total = subTotal - discount + deliveryFee;

  return (
    <div className="p-8 max-w-3xl mx-auto font-sans">
      <header className="flex items-center justify-between mb-8">
        {/* Go Back link using navigate */}
        <span 
          className="text-gray-500 text-sm cursor-pointer"
          onClick={() => navigate('/')} // Navigate to Home page
        >
          &lt; Go Back
        </span>
        <h1 className="text-2xl font-semibold">Your Cart</h1>
      </header>

      <div className="space-y-6">
        {items.map((item) => (
          <div key={item.id} className="flex items-center border-b pb-4">
            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md mr-4" />
            <div className="flex-1">
              <p className="font-semibold">{item.name}</p>
              <p className="text-gray-600 text-sm">Size: {item.size}</p>
              <p className="text-gray-600 text-sm">Color: {item.color}</p>
              <p className="font-semibold text-gray-800">Rs. {item.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center space-x-2 mr-4">
              <button
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded"
                onClick={() => decreaseQuantity(item.id)}
              >
                -
              </button>
              <span className="text-lg font-medium">{item.quantity}</span>
              <button
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded"
                onClick={() => increaseQuantity(item.id)}
              >
                +
              </button>
            </div>
            <button className="text-red-500 text-xl" onClick={() => removeItem(item.id)}>
              <FaTrashAlt />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h2 className="font-semibold text-lg mb-4">Order Summary</h2>
        <div className="flex justify-between py-2">
          <span>Sub order</span>
          <span>Rs. {subTotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between py-2 text-green-600">
          <span>Discount (-20%)</span>
          <span>-Rs. {discount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between py-2">
          <span>Delivery fee</span>
          <span>Rs. {deliveryFee.toFixed(2)}</span>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span>Rs. {total.toFixed(2)}</span>
        </div>
      </div>

      <button className="bg-blue-700 hover:bg-blue-800 text-white w-full py-3 rounded mt-6 font-medium">
        Order All
      </button>
    </div>
  );
};

export default Cart;
