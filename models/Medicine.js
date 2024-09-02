const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({

  name: String,
  generic_name: String,
  brand_name: String,
  category: String,
  form: String,
  dosage: String,
  description: String,
  side_effects: String,
  contraindications: String,
  manufacturer: {
    name: String,
    address: String,
    contact_info: String
  },
  expiry_date: Date,
  quantity_available: Number
});

const Medicine = mongoose.model('Medicine', medicineSchema);

module.exports = Medicine;
