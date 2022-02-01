import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdddEvent from './components/AddEvent';
import Home from './components/Home';



function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/add" element={<AdddEvent />}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
