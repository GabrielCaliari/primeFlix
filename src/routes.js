import {BrowserRouter, Routes, Route} from "react-router-dom";


import Filme from "./pages/Filme";
import Header from "./components/Header";
import Home from "./pages/Home";


function RoutesApp(){
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/filme/:id" element={<Filme />}/>

      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;
