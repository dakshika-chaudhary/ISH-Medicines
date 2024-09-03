import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LowStockMedicines = () => {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    const fetchLowStockMedicines = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/medicines/low-stock');
        setMedicines(res.data);
      } catch (err) {
        console.error('Error fetching low stock medicines:', err);
      }
    };

    fetchLowStockMedicines();
  }, []);

  return (
    <div>
      <h2><subhead>Low Stock or Near-Expiry Medicines</subhead></h2>
      {medicines.length > 0 ? (
        <ul>
          {medicines.map((medicine) => (
            <li key={medicine._id}>
              name: {medicine.name} <br></br>
             generic_name: {medicine.generic_name} <br></br> 
              Quantity: {medicine.quantity_available} <br></br>
              Expiry Date: {new Date(medicine.expiry_date).toLocaleDateString()}<br></br><br></br>
              
            </li>
            
          ))}
        </ul>
      ) : (
        <p>No medicines need to be reordered or are close to expiry.</p>
      )}
    </div>
  );
};

export default LowStockMedicines;

