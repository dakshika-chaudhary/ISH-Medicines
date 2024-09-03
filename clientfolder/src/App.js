// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import MedicinesList from './components/MedicinesList';
// import AddMedicine from './components/AddMedicine';
// import EditMedicine from './components/EditMedicine';
// import LowStockMedicines from './components/LowStockMedicines';

// function App() {
//   return (
//     <Router>
//       <div className="App flex items-center justify-center min-h-screen bg-gray-100 ">
//         <h1 className='flex items-center justify-center min-h-screen bg-gray-100'>Medicine Inventory Management</h1>
//         <Routes>
//           <Route path="/" element={<MedicinesList />} />
//           <Route path="/add-medicine" element={<AddMedicine />} />
//           <Route path="/edit-medicine/:id" element={<EditMedicine />} />
//           <Route path="/low-stock" element={<LowStockMedicines />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MedicinesList from './components/MedicinesList';
import AddMedicine from './components/AddMedicine';
import EditMedicine from './components/EditMedicine';
import LowStockMedicines from './components/LowStockMedicines';

function App() {
  return (
    <Router>
      {/* Main container with flexbox for vertical alignment */}
      <div className="App flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        
        {/* Header */}
        <h1 className="text-8xl font-bold text-blue-700 mb-8 text-center">
        <i>Aarogya Medicine Management</i> 

        </h1>
        
        {/* Routes */}
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
          <Routes>
            <Route path="/" element={<MedicinesList />} />
            <Route path="/add-medicine" element={<AddMedicine />} />
            <Route path="/edit-medicine/:id" element={<EditMedicine />} />
            <Route path="/low-stock" element={<LowStockMedicines />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

