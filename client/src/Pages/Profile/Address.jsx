import React, { useState } from 'react';

const Address = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: 'John Doe',
      mobileNumber: '9876543210',
      pincode: '123456',
      locality: 'Downtown',
      areaStreet: '123 Main St',
      city: 'City A',
      state: 'Maharashtra',
      landmark: 'Near Park',
      alternatePhone: '9876543211',
      addressType: 'Home',
    },
    {
      id: 2,
      name: 'Jane Smith',
      mobileNumber: '9876543222',
      pincode: '654321',
      locality: 'Uptown',
      areaStreet: '456 Elm St',
      city: 'City B',
      state: 'Karnataka',
      landmark: '',
      alternatePhone: '',
      addressType: 'Work',
    },
  ]);
  const [newAddress, setNewAddress] = useState({
    name: '',
    mobileNumber: '',
    pincode: '',
    locality: '',
    areaStreet: '',
    city: '',
    state: '',
    landmark: '',
    alternatePhone: '',
    addressType: '',
  });
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false); // New state for edit mode
  const [editingId, setEditingId] = useState(null); // To track which address is being edited

  const handleAddAddress = () => {
    if (Object.values(newAddress).some((field) => field === '' && field !== 'landmark' && field !== 'alternatePhone')) {
      alert('Please fill out all required fields.');
      return;
    }

    const address = {
      id: Date.now(),
      ...newAddress,
    };
    setAddresses([...addresses, address]);
    setNewAddress({
      name: '',
      mobileNumber: '',
      pincode: '',
      locality: '',
      areaStreet: '',
      city: '',
      state: '',
      landmark: '',
      alternatePhone: '',
      addressType: '',
    });
    setIsAdding(false); // Hide the form after adding the address
  };

  const handleSaveEdit = () => {
    const updatedAddresses = addresses.map((address) =>
      address.id === editingId ? { ...newAddress, id: editingId } : address
    );
    setAddresses(updatedAddresses);
    setNewAddress({
      name: '',
      mobileNumber: '',
      pincode: '',
      locality: '',
      areaStreet: '',
      city: '',
      state: '',
      landmark: '',
      alternatePhone: '',
      addressType: '',
    });
    setIsEditing(false); // Exit edit mode
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setNewAddress({
      name: '',
      mobileNumber: '',
      pincode: '',
      locality: '',
      areaStreet: '',
      city: '',
      state: '',
      landmark: '',
      alternatePhone: '',
      addressType: '',
    });
    setIsAdding(false); // Ensure the "Add" form is also hidden when canceling edit
  };

  const handleDeleteAddress = (id) => {
    setAddresses(addresses.filter((address) => address.id !== id));
  };

  const handleEditAddress = (id) => {
    const addressToEdit = addresses.find((address) => address.id === id);
    setNewAddress({ ...addressToEdit });
    setIsAdding(true); // Show the form to edit address
    setIsEditing(true); // Set to editing mode
    setEditingId(id); // Set the address being edited
  };

  return (
    <div className="bg-sky-100 p-8">
      <div className="container mx-auto space-y-8">
        {/* Button to show the add new address form */}
        {!isAdding && !isEditing && (
          <button
            onClick={() => setIsAdding(true)}
            className="bg-blue-500 text-white p-3 rounded-lg"
          >
            Add New Address
          </button>
        )}

        {/* Add New Address Form */}
        {(isAdding || isEditing) && (
          <div className="bg-sky-100 rounded-lg shadow-md p-6 space-y-4 mt-4">
            <h2 className="text-2xl font-semibold text-black">
              {isEditing ? 'Edit Address' : 'Add New Address'}
            </h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={newAddress.name}
                  onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })}
                  className="p-3 w-full rounded-lg text-gray-800"
                />
                <input
                  type="tel"
                  placeholder="10-digit Mobile Number"
                  value={newAddress.mobileNumber}
                  onChange={(e) => setNewAddress({ ...newAddress, mobileNumber: e.target.value })}
                  className="p-3 w-full rounded-lg text-gray-800"
                  maxLength={10}
                />
                <input
                  type="text"
                  placeholder="Pincode"
                  value={newAddress.pincode}
                  onChange={(e) => setNewAddress({ ...newAddress, pincode: e.target.value })}
                  className="p-3 w-full rounded-lg text-gray-800"
                />
                <input
                  type="text"
                  placeholder="Locality"
                  value={newAddress.locality}
                  onChange={(e) => setNewAddress({ ...newAddress, locality: e.target.value })}
                  className="p-3 w-full rounded-lg text-gray-800"
                />
              </div>

              <input
                type="text"
                placeholder="Address (Area and Street)"
                value={newAddress.areaStreet}
                onChange={(e) => setNewAddress({ ...newAddress, areaStreet: e.target.value })}
                className="p-3 w-full rounded-lg text-gray-800"
                style={{ height: '100px' }}
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="City/District/Town"
                  value={newAddress.city}
                  onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
                  className="p-3 w-full rounded-lg text-gray-800"
                />
                <select
                  value={newAddress.state}
                  onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })}
                  className="p-3 w-full rounded-lg text-gray-800"
                >
                  <option value="">--Select State--</option>
                  {/* Add all states options here */}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Landmark (Optional)"
                  value={newAddress.landmark}
                  onChange={(e) => setNewAddress({ ...newAddress, landmark: e.target.value })}
                  className="p-3 w-full rounded-lg text-gray-800"
                />
                <input
                  type="tel"
                  placeholder="Alternate Phone (Optional)"
                  value={newAddress.alternatePhone}
                  onChange={(e) => setNewAddress({ ...newAddress, alternatePhone: e.target.value })}
                  className="p-3 w-full rounded-lg text-gray-800"
                  maxLength={10}
                />
              </div>

              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="Home"
                    checked={newAddress.addressType === 'Home'}
                    onChange={() => setNewAddress({ ...newAddress, addressType: 'Home' })}
                    className="mr-2"
                  />
                  Home
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="Work"
                    checked={newAddress.addressType === 'Work'}
                    onChange={() => setNewAddress({ ...newAddress, addressType: 'Work' })}
                    className="mr-2"
                  />
                  Work
                </label>
              </div>

              <div className="flex space-x-4">
                {isEditing ? (
                  <>
                    <button
                      onClick={handleSaveEdit}
                      className="bg-blue-500 text-white p-3 w-full rounded-lg"
                    >
                      Save
                    </button>
                    <button
                      onClick={handleCancelEdit}
                      className="bg-gray-500 text-white p-3 w-full rounded-lg"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={handleAddAddress}
                      className="bg-blue-500 text-white p-3 w-full rounded-lg"
                    >
                      Add Address
                    </button>
                    <button
                      onClick={handleCancelEdit}
                      className="bg-gray-500 text-white p-3 w-full rounded-lg"
                    >
                      Cancel
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Display Saved Addresses */}
        <div className="space-y-4 mt-8">
          {addresses.map((address) => (
            <div key={address.id} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{address.name}</h3>
              <p>{address.mobileNumber}</p>
              <p>{address.addressType}</p>
              <p>{address.areaStreet}, {address.locality}, {address.city}, {address.state}</p>
              <p>{address.pincode}</p>
              <button
                onClick={() => handleEditAddress(address.id)}
                className="bg-yellow-500 text-white p-2 rounded-lg"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteAddress(address.id)}
                className="bg-red-500 text-white p-2 rounded-lg ml-2"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Address;
