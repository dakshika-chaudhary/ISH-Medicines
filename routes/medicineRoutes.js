const express = require('express');
const Medicine = require('../models/Medicine');

const router = express.Router();



// GET all medicines
router.get('/', async (req, res) => {
  try {
    const medicines = await Medicine.find();
    res.json(medicines);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new medicine
router.post('/', async (req, res) => {
  const medicine = new Medicine(req.body);
  try {
    const newMedicine = await medicine.save();
    res.status(201).json(newMedicine);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT to update a medicine
router.put('/:id', async (req, res) => {
  try {
    const updatedMedicine = await Medicine.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedMedicine);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a medicine
router.delete('/:id', async (req, res) => {
  try {
    await Medicine.findByIdAndDelete(req.params.id);
    res.json({ message: 'Medicine deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET medicines with low stock or close to expiry
router.get('/low-stock', async (req, res) => {
    const LOW_STOCK_THRESHOLD = 50;  // You can set this threshold to any value
    const EXPIRY_THRESHOLD_DAYS = 50;  // Number of days to consider for near-expiry medicines
  
    try {
      const today = new Date();
      const nearExpiryDate = new Date();
      nearExpiryDate.setDate(today.getDate() + EXPIRY_THRESHOLD_DAYS);
  
      const medicines = await Medicine.find({
        $or: [
          { quantity_available: { $lt: LOW_STOCK_THRESHOLD } },
          { expiry_date: { $lt: nearExpiryDate } }
        ]
      });
  
      res.json(medicines);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  

module.exports = router;


