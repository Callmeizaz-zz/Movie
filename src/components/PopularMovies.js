import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
//Styled-components
import styled from "styled-components";
//Import Url
import { PopularMovUrl, ApiKey } from "../Axios/BaseUrl";
//Animation Framer motion
import { motion } from "framer-motion";
import { AnimatePage } from "../Animations/Animation";

const PopularMovies = () => {
  //states
  const [Movies, SetMovies] = useState([]);

  //API calls using axios
  useEffect(() => {
    async function fetchMovies() {
      await axios
        .get(PopularMovUrl + ApiKey)
        .then((response) => SetMovies(response.data.results));
    }
    fetchMovies();
  }, [SetMovies]);

  const baseUrl = "https://image.tmdb.org/t/p/";
  const posterSize = "original";
  return (
    <MovieStyled
      variants={AnimatePage}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      {/* Iterating over movies */}
      {Movies.map((movie) => {
        return (
          <TitleStyled key={movie.id}>
            <h2>{movie.title}</h2>
            <div className="line"></div>
            <Link to={`/movie/${movie.id}`}>
              <img
                src={baseUrl + posterSize + movie.poster_path}
                alt={movie.title}
              />
            </Link>
          </TitleStyled>
        );
      })}
      {/* End of movies */}
    </MovieStyled>
  );
};

//Style
const MovieStyled = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;

const TitleStyled = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
    cursor: pointer;
  }
  img {
    width: 100%;
    object-fit: cover;
    height: 80vh;
  }
`;

export default PopularMovies;
