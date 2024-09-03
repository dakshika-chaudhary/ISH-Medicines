import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditMedicine = () => {
  const { id } = useParams();
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

  useEffect(() => {
    const fetchMedicine = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/medicines/${id}`);
        setMedicine(res.data);
      } catch (error) {
        console.error('Error fetching medicine data:', error);
      }
    };
    fetchMedicine();
  }, [id]);

  // Updated handleChange function to handle nested objects
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith('manufacturer.')) {
      // Handle changes for manufacturer object fields
      const fieldName = name.split('.')[1];
      setMedicine((prevState) => ({
        ...prevState,
        manufacturer: {
          ...prevState.manufacturer,
          [fieldName]: value
        }
      }));
    } else {
      // Handle changes for flat fields
      setMedicine((prevState) => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/medicines/${id}`, medicine);
      window.location = '/'; // Redirect after successful update
    } catch (error) {
      console.error('Error updating medicine:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2><subhead>Edit Medicine</subhead></h2>

      {/* Name Field */}
      <input
        type="text"
        name="name"
        value={medicine.name}
        onChange={handleChange}
        required
        placeholder="Medicine Name"
      />

      {/* Generic Name Field */}
      <input
        type="text"
        name="generic_name"
        value={medicine.generic_name}
        onChange={handleChange}
        required
        placeholder="Generic Name"
      />

      {/* Brand Name Field */}
      <input
        type="text"
        name="brand_name"
        value={medicine.brand_name}
        onChange={handleChange}
        required
        placeholder="Brand Name"
      />
<br></br><br></br>
      {/* Category Field */}
      <input
        type="text"
        name="category"
        value={medicine.category}
        onChange={handleChange}
        required
        placeholder="Category"
      />

      {/* Form Field */}
      <input
        type="text"
        name="form"
        value={medicine.form}
        onChange={handleChange}
        required
        placeholder="Form"
      />

      {/* Dosage Field */}
      <input
        type="text"
        name="dosage"
        value={medicine.dosage}
        onChange={handleChange}
        required
        placeholder="Dosage"
      />
      <br></br><br></br>

      {/* Description Field */}
      <textarea
        name="description"
        value={medicine.description}
        onChange={handleChange}
        required
        placeholder="Description"
      />

      {/* Side Effects Field */}
      <textarea
        name="side_effects"
        value={medicine.side_effects}
        onChange={handleChange}
        placeholder="Side Effects"
      />

      {/* Contraindications Field */}
      <textarea
        name="contraindications"
        value={medicine.contraindications}
        onChange={handleChange}
        placeholder="Contraindications"
      />
<br></br><br></br>
      {/* Manufacturer Name Field */}
      <input
        type="text"
        name="manufacturer.name"
        value={medicine.manufacturer.name}
        onChange={handleChange}
        
        placeholder="Manufacturer Name"
      />

      {/* Manufacturer Address Field */}
      <input
        type="text"
        name="manufacturer.address"
        value={medicine.manufacturer.address}
        onChange={handleChange}
        
        placeholder="Manufacturer Address"
      />

      {/* Manufacturer Contact Info Field */}
      <input
        type="text"
        name="manufacturer.contact_info"
        value={medicine.manufacturer.contact_info}
        onChange={handleChange}
       
        placeholder="Manufacturer Contact Info"
      />
<br></br><br></br>
      {/* Expiry Date Field */}
      <input
        type="date"
        name="expiry_date"
        value={medicine.expiry_date ? medicine.expiry_date.substring(0, 10) : ''}
        onChange={handleChange}
        required
      />

      {/* Quantity Available Field */}
      <input
        type="number"
        name="quantity_available"
        value={medicine.quantity_available}
        onChange={handleChange}
        required
        min="0"
      />

<br></br><br></br>
      {/* Submit Button */}
      <button type="submit">Update Medicine</button>
    </form>
  );
};

export default EditMedicine;
