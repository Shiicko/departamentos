import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { List } from "./components/Deptos/List";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import OfertasExclusivas from "./components/Ofertas/OfertasExclusivas";
import { Precios } from "./components/Precios/Precios";
import { Footer } from "./components/Footer/Footer";
import { GlobalStyle } from "./styles/GlobalStyles";
import { More } from "./components/More/More";

export const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <List />
              <OfertasExclusivas />
              <Precios />
              <Footer />
            </>
          }
        />
        <Route path="/apartment/:id" element={<More />} />
      </Routes>
    </Router>
  );
};
