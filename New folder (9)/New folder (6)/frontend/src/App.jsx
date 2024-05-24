import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Detail from "./pages/Detail";
import Uptade from "./pages/Uptade";
import Add from "./pages/Add";
import Data from "./pages/Data";
import MainProvider from "./context/MainProvider";


function App() {
  return (
    <>
      <MainProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="/Detail/:id" element={<Detail />} />
            <Route path="/Uptade/:id" element={<Uptade />} />
            <Route path="/Add" element={<Add />} />
            <Route path="/Data" element={<Data />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </MainProvider>
    </>
  )
}

export default App
