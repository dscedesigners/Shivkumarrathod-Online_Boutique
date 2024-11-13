import React from 'react';

const Orders = () => {
  const orders = [
    {
      id: 1,
      date: '2024-11-05',
      items: ['Shirt', 'Pants'],
      total: '$50.00',
    },
    {
      id: 2,
      date: '2024-11-03',
      items: ['Dress', 'Shoes'],
      total: '$120.00',
    },
    {
      id: 3,
      date: '2024-10-30',
      items: ['Jacket'],
      total: '$75.00',
    },
  ];

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-black">My Orders</h2>
        {orders.length > 0 ? (
          <ul className="space-y-4 mt-4">
            {orders.map((order) => (
              <li key={order.id} className="border-b pb-4">
                <div className="flex justify-between">
                  <p className="text-lg font-medium">Date: {order.date}</p>
                  <p className="text-lg font-medium">Total: {order.total}</p>
                </div>
                <p className="mt-2">Items: {order.items.join(', ')}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-gray-600">You have no orders yet.</p>
        )}
      </div>
    </div>
  );
};

export default Orders;
