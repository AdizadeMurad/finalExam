
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import AdminPanel from "./pages/AdminPanel";
import NoPage from "./pages/NoPage";
import Uptade from "./pages/Uptade";
import Add from "./pages/Add";

function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/Detail" element={<Detail />} />
          <Route path="/AdminPanel" element={<AdminPanel />} />
          <Route path="/Uptade/:id" element={<Uptade />} />
          <Route path="/Add" element={<Add />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
