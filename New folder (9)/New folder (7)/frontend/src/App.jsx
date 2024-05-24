import './App.css'
import Admin from './pages/Admin'
import Add from './pages/Add'
import Basket from './pages/Basket'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Uptade from './pages/Uptade';
import Detail from './pages/Detail';
import MainProvider from './context/MainProvider';
function App() {

  return (
    <>
      <MainProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="/Admin" element={<Admin />} />
              <Route path="/Add" element={<Add />} />
              <Route path="/Basket" element={<Basket />} />
              <Route path="/Uptade/:id" element={<Uptade />} />
              <Route path="/Detail/:id" element={<Detail />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MainProvider>
    </>
  )
}

export default App
