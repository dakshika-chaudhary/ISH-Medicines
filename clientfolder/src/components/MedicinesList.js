import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MedicinesList = () => {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/medicines');
        setMedicines(res.data);
      } catch (error) {
        console.error('Error fetching medicines:', error);
      }
    };
    fetchMedicines();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Main container centered on the page */}
      <div className="container mx-auto px-10 py-6">
        <h2 className="text-1xl font-bold text-blue text-center mb-8 space-x-5">
         <subhead>Medicines List</subhead> 
        </h2>
        
        {/* Navigation Links */}
        <div className="flex .btn-primary justify-center mb-8">
          <Link to="/add-medicine" className="bg-blue-600 text-white px-6 py-5 rounded-full mr-4 hover:bg-blue-700 transition duration-300">
           <u><links> Add Medicine</links></u>
          </Link>
          
  <br></br>        <Link to="/low-stock" className="bg-red-600 text-white px-6  py-5 rounded-full hover:bg-red-700 transition duration-300">
           <u> <links>Low Stock Medicines</links></u>
          </Link>
          <br></br><br></br>
        </div>
        
        {/* Medicines List */}
        <ol className="max-w-lg w-full mx-auto space-y-6">
          {medicines.map((medicine) => (
            <li key={medicine._id} className= "bg-white shadow-lg rounded-lg p-6">
              <div className="text-xl font-semibold text-gray-800 mb-2">Name: {medicine.name}</div>
              <div className="text-sm text-gray-600 mb-1">Generic Name: {medicine.generic_name}</div>
              <div className="text-sm text-gray-600 mb-1">Brand Name: {medicine.brand_name}</div>
              <div className="text-sm text-gray-600 mb-1">Dosage: {medicine.dosage}</div>
              <div className="text-sm text-gray-600 mb-1">Side Effects: {medicine.side_effects}</div>
              <div className="text-sm text-gray-600 mb-1">Expiry Date: {new Date(medicine.expiry_date).toLocaleDateString()}</div>
              <div className="text-sm text-gray-600 mb-1">Quantity: {medicine.quantity_available}</div>
              <hr></hr>
              {/* Edit Link */}
              <Link to={`/edit-medicine/${medicine._id}`} className="mt-4 inline-block text-blue-500 hover:text-blue-600 transition duration-300">
                Make Changes
              </Link>
              
              <br></br><br></br>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default MedicinesList;
