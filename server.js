const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const medicineRoutes = require('./routes/medicineRoutes');


dotenv.config();


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Medicine routes
app.use('/api/medicines', medicineRoutes);

//MongoDB 
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log('Connected to MongoDB database');
})
.catch((err) => {
  console.error('Error connecting to MongoDB database:', err);
});


app.get('/', (req, res) => {
    res.send('Hello from the Medicines API');
  });
  
  // Start the server
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

