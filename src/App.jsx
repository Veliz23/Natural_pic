import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Favoritos from "./Pages/Favoritos";
import Home from "./Pages/Home";


export default function App() {
  return(
    <>
      <main>
        <Navbar />
          <Routes>
            <Route path="/"   element={<Home/>}/>
            <Route path="/favoritos" element={<Favoritos/>}/>
          </Routes>
        <Footer/>
      </main>
    </>
  )
};
