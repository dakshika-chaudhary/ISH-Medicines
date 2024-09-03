

import React, { useState } from 'react';
import axios from 'axios';

const AddMedicine = () => {
  const [medicine, setMedicine] = useState({
    name: '',
    generic_name: '',
    brand_name: '',
    category: '',
    form: '',
    dosage: '',
    description: '',
    side_effects: '',
    contraindications: '',
    manufacturer: {
      name: '',
      address: '',
      contact_info: ''
    },
    expiry_date: '',
    quantity_available: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith('manufacturer.')) {
      const fieldName = name.split('.')[1];
      setMedicine((prevState) => ({
        ...prevState,
        manufacturer: {
          ...prevState.manufacturer,
          [fieldName]: value
        }
      }));
    } else {
      setMedicine({
        ...medicine,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/medicines', medicine);
    window.location = '/';
  };

  return (
    <div className=" flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <form 
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md max-w-lg w-full"
      >
        <h2 className="text-2xl font-bold mb-6 text-center"><subhead>Add New Medicine</subhead></h2>

        {/* Name Field */}
        <input
          type="text"
          name="name"
          placeholder="Medicine Name"
          onChange={handleChange}
          value={medicine.name}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          required
        />

        {/* Generic Name Field */}
        <input
          type="text"
          name="generic_name"
          placeholder="Generic Name"
          onChange={handleChange}
          value={medicine.generic_name}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />

        {/* Brand Name Field */}
        <input
          type="text"
          name="brand_name"
          placeholder="Brand Name"
          onChange={handleChange}
          value={medicine.brand_name}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          required
        />
        <br></br><br></br>

        {/* Category Field */}
        <input
          type="text"
          name="category"
          placeholder="Category"
          onChange={handleChange}
          value={medicine.category}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          required
        />

        {/* Form Field */}
        <input
          type="text"
          name="form"
          placeholder="Form"
          onChange={handleChange}
          value={medicine.form}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />

        {/* Dosage Field */}
        <input
          type="text"
          name="dosage"
          placeholder="Dosage"
          onChange={handleChange}
          value={medicine.dosage}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          required
        />
         <br></br><br></br>

        {/* Description Field */}
        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          value={medicine.description}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />

        {/* Side Effects Field */}
        <textarea
          name="side_effects"
          placeholder="Side Effects"
          onChange={handleChange}
          value={medicine.side_effects}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />

        {/* Contraindications Field */}
        <textarea
          name="contraindications"
          placeholder="Contraindications"
          onChange={handleChange}
          value={medicine.contraindications}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />

<br></br><br></br>
        {/* Manufacturer Name Field */}
        <input
          type="text"
          name="manufacturer.name"
          placeholder="Manufacturer Name"
          onChange={handleChange}
          value={medicine.manufacturer.name}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />

        {/* Manufacturer Address Field */}
        <input
          type="text"
          name="manufacturer.address"
          placeholder="Manufacturer Address"
          onChange={handleChange}
          value={medicine.manufacturer.address}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />

        {/* Manufacturer Contact Info Field */}
        <input
          type="text"
          name="manufacturer.contact_info"
          placeholder="Manufacturer Contact Info"
          onChange={handleChange}
          value={medicine.manufacturer.contact_info}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />

<br></br><br></br>
        {/* Expiry Date Field */}
        <input
          type="date"
          name="expiry_date"
          onChange={handleChange}
          value={medicine.expiry_date}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          required
        />

        {/* Quantity Available Field */}
        <input
          type="number"
          name="quantity_available"
          placeholder="Quantity Available"
          onChange={handleChange}
          value={medicine.quantity_available}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          required
          min="0"
        />

<br></br><br></br>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition ease-in-out duration-150"
        >
          Add Medicine
        </button>
      </form>
    </div>
  );
};

export default AddMedicine;
