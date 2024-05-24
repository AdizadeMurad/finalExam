
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Add from './pages/Add';
import Admin from './pages/Admin';
import Basket from './pages/Basket';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Uptade from './pages/Uptade';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={< Home/>} />
            <Route path="/Add" element={<Add />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="/Basket" element={<Basket />} />
            <Route path="/Detail/:id" element={<Detail />} />
            <Route path="/Uptade/:id" element={<Uptade />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
