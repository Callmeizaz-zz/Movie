import React, { useState } from "react";
//Importing pages
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
//Importing global styles
import GlobalStyle from "./styles/GlobalStyle";
import Nav from "./components/Nav";
//Importing Router
import { Route, Switch, useLocation } from "react-router-dom";
//Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle /> {/*Global styling  */}
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work">
            <OurWork />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
          <Route path="/movies" exact>
            <Movies />
          </Route>
          <Route path="/movie/:id">
            <MovieDetails />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
