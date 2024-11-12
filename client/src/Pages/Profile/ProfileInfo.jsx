import React, { useState } from 'react';

const ProfileInfo = () => {
  const [isEditing, setIsEditing] = useState({
    personalInfo: false,
    email: false,
    phoneNumber: false,
  });

  const [profile, setProfile] = useState({
    name: 'John Doe',
    gender: '', // gender starts empty by default
    email: 'john.doe@example.com',
    phoneNumber: '1234567890',
  });

  const handleEdit = (section) => {
    setIsEditing((prev) => ({ ...prev, [section]: true }));
  };

  const handleSave = (section) => {
    setIsEditing((prev) => ({ ...prev, [section]: false }));
  };

  const handleChange = (e, field) => {
    setProfile({
      ...profile,
      [field]: e.target.value,
    });
  };

  const handleGenderChange = (e) => {
    setProfile({
      ...profile,
      gender: e.target.value, // Set gender based on the selected radio button
    });
  };

  return (
    <div className="bg-sky-100 text-gray-400 p-8">
      <div className="container mx-auto px-10 space-y-8">
        {/* Personal Info Section */}
        <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-black">Personal Info</h2>
          {isEditing.personalInfo ? (
            <div className="space-y-2">
              <input
                type="text"
                value={profile.name}
                onChange={(e) => handleChange(e, 'name')}
                className="p-3 w-full rounded-lg text-gray-800 border border-gray-600"
              />
              <div className="flex items-center space-x-4">
                <div>
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="Male"
                    checked={profile.gender === 'Male'}
                    onChange={handleGenderChange}
                    className="form-radio h-5 w-5 text-blue-600"
                  />
                  <label htmlFor="male" className="ml-2 text-lg font-medium text-black">
                    Male
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="Female"
                    checked={profile.gender === 'Female'}
                    onChange={handleGenderChange}
                    className="form-radio h-5 w-5 text-blue-600"
                  />
                  <label htmlFor="female" className="ml-2 text-lg font-medium text-black">
                    Female
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="other"
                    name="gender"
                    value="Other"
                    checked={profile.gender === 'Other'}
                    onChange={handleGenderChange}
                    className="form-radio h-5 w-5 text-blue-600"
                  />
                  <label htmlFor="other" className="ml-2 text-lg font-medium text-black">
                    Other
                  </label>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-2 text-gray-400">
              <input
                type="text"
                value={profile.name}
                readOnly
                className="p-3 w-full rounded-lg bg-gray-200"
              />
              <input
                type="text"
                value={profile.gender || 'Not specified'}
                readOnly
                className="p-3 w-full rounded-lg bg-gray-200"
              />
            </div>
          )}
          <div className="flex space-x-4">
            {!isEditing.personalInfo ? (
              <button
                onClick={() => handleEdit('personalInfo')}
                className="text-blue-500 hover:text-blue-700"
              >
                Edit
              </button>
            ) : (
              <button
                onClick={() => handleSave('personalInfo')}
                className="text-green-500 hover:text-green-700"
              >
                Save
              </button>
            )}
          </div>
        </div>

        {/* Email Section */}
        <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-black">Email</h2>
          {isEditing.email ? (
            <input
              type="email"
              value={profile.email}
              onChange={(e) => handleChange(e, 'email')}
              className="p-3 w-full rounded-lg text-gray-800 border border-gray-600"
            />
          ) : (
            <input
              type="email"
              value={profile.email}
              readOnly
              className="p-3 w-full rounded-lg bg-gray-200"
            />
          )}
          <div className="flex space-x-4">
            {!isEditing.email ? (
              <button
                onClick={() => handleEdit('email')}
                className="text-blue-500 hover:text-blue-700"
              >
                Edit
              </button>
            ) : (
              <button
                onClick={() => handleSave('email')}
                className="text-green-500 hover:text-green-700"
              >
                Save
              </button>
            )}
          </div>
        </div>

        {/* Phone Number Section */}
        <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-black">Phone Number</h2>
          {isEditing.phoneNumber ? (
            <input
              type="tel"
              value={profile.phoneNumber}
              onChange={(e) => handleChange(e, 'phoneNumber')}
              className="p-3 w-full rounded-lg text-gray-800 border border-gray-600"
            />
          ) : (
            <input
              type="tel"
              value={profile.phoneNumber}
              readOnly
              className="p-3 w-full rounded-lg bg-gray-200"
            />
          )}
          <div className="flex space-x-4">
            {!isEditing.phoneNumber ? (
              <button
                onClick={() => handleEdit('phoneNumber')}
                className="text-blue-500 hover:text-blue-700"
              >
                Edit
              </button>
            ) : (
              <button
                onClick={() => handleSave('phoneNumber')}
                className="text-green-500 hover:text-green-700"
              >
                Save
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
