import './App.css';
import Table from './Table';
import Calender from './Calender';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
           <BrowserRouter>
           <Routes>
            <Route path="/" element={<Table />} />
            <Route path="/Calender" element={<Calender />} />
           </Routes>
           </BrowserRouter>
  );
}

export default App;
