import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar/Navbar";
import Footer from "./components/layouts/Footer/Footer";
import GlobalContextProvider from "./context/GlobalContext";
import ProfesionalesContainer from "./components/pages/Profesionales/ProfesionalesContainer";
import Home from "./components/pages/Home/Home";
import "../src/index.css"
import ProfesionalSeleccionadoContainer from "./components/pages/ProfesionalSeleccionado/ProfesionalSeleccionadoContainer";
import FavoritosContainer from "./components/pages/Favoritos/FavoritosContainer";
import ContactoForm from "./components/pages/Contacto/ContactoForm";

function App() {
  return(
    <BrowserRouter>
    <GlobalContextProvider>
      <Routes>
        <Route element={<Navbar/>}>
        <Route element={<Footer/>}>

          <Route path="/" element={<Home/>}/>
          <Route path="/dentistas" element={<ProfesionalesContainer/>}/>
          <Route path="/dentista/:id" element={<ProfesionalSeleccionadoContainer/>}/>
          <Route path="/contacto" element={<ContactoForm/>}/>
          <Route path="/favs" element={<FavoritosContainer/>}/>

          </Route>
        </Route>

          <Route path="*" element={<h1>Pagina no encontrada</h1>}/>

      </Routes>
      </GlobalContextProvider>
    </BrowserRouter>
  )
}

export default App;