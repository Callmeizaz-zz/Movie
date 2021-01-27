import React from "react";
import PopularMovies from "../components/PopularMovies";
//import resulable comp
import ScrollTop from "../ui/useScrollTop";

const Movies = () => {
  return (
    <React.Fragment>
      <PopularMovies />
      <ScrollTop />
    </React.Fragment>
  );
};

export default Movies;
