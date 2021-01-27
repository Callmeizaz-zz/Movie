import React from "react";
//Import components
import MovieDetailComp from "../components/MovieDetailComp";
//import resulable comp
import ScrollTop from "../ui/useScrollTop";

const MovieDetail = () => {
  return (
    <React.Fragment>
      <MovieDetailComp />
      <ScrollTop />
    </React.Fragment>
  );
};

export default MovieDetail;
