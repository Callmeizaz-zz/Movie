import React, { useEffect, useState } from "react";
//React-router
import { useParams } from "react-router-dom";
//Styled
import styled from "styled-components";
//Axios
import axios from "axios";
import { ApiKey } from "../Axios/BaseUrl";
//Animation Framer motion
import { motion } from "framer-motion";
import { AnimateSharedLayout } from "framer-motion";
import { AnimatePage } from "../Animations/Animation";
//Import Reusable components
import { ToggleList } from "../ui/Toggle";

const MovieDetailComp = () => {
  const [review, setReview] = useState([]);
  const [movDetail, setMovDetail] = useState([]);
  const [cast, setCast] = useState([]);
  const MovieId = useParams();

  //Base url from movie details
  const baseUrl = ` https://api.themoviedb.org/3/movie/${MovieId.id}?api_key=`;
  //Api Calls
  useEffect(() => {
    async function FetchMovieDetail() {
      await axios
        .get(baseUrl + ApiKey)
        .then((res) => setMovDetail(res.data))
        .catch((error) => console.log(error.message));
    }
    FetchMovieDetail();
  }, [setMovDetail, baseUrl]);

  //Fetching reviews
  useEffect(() => {
    async function FetchReviews() {
      const reviewUrl = `https://api.themoviedb.org/3/movie/${MovieId.id}/reviews?api_key=`;
      await axios
        .get(reviewUrl + ApiKey)
        .then((res) => setReview(res.data.results));
    }
    FetchReviews();
  }, [setReview, MovieId.id]);

  //Fetching credits
  useEffect(() => {
    async function FetchCredits() {
      const creditUrl = `https://api.themoviedb.org/3/movie/${MovieId.id}/credits?api_key=`;
      await axios.get(creditUrl + ApiKey).then((res) => setCast(res.data.cast));
    }
    FetchCredits();
  }, [setCast, MovieId.id]);
  //img url
  const imgUrl = "https://image.tmdb.org/t/p/original";
  return (
    <React.Fragment>
      {movDetail && (
        <MovDetailStyled
          variants={AnimatePage}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <HeadLineStyled>
            <img src={imgUrl + movDetail.poster_path} alt={movDetail.title} />
            <StyledDesc>
              <h2>{movDetail.title}</h2>
              <p>{movDetail.tagline}</p>
              {movDetail.genres &&
                movDetail.genres.map((genre) => {
                  return <li key={genre.id}>{genre.name}</li>;
                })}
              <div className="line"></div>
              <h4>Description</h4>
              <p>{movDetail.overview}</p>
              <h4>Casts</h4>
              {cast.slice(0, 30).map((actors) => {
                return <li key={actors.id}>{actors.name}</li>;
              })}
            </StyledDesc>
          </HeadLineStyled>
          <ReviewStyled>
            <h2>Reviews</h2>
            <p>Total Reviews {review.length}</p>
            {review.length <= 0 && <h3>No reviews</h3>}
            {review.map((review) => (
              <Hide>
                <Review
                  author={review.author}
                  reviews={review.content}
                  key={review.id}
                />
              </Hide>
            ))}
          </ReviewStyled>
        </MovDetailStyled>
      )}
    </React.Fragment>
  );
};
//child components
const Review = ({ author, reviews }) => {
  return (
    <AnimateSharedLayout>
      <ToggleList author={author}>
        <SingleReview>
          <p>{reviews}</p>
        </SingleReview>
      </ToggleList>
    </AnimateSharedLayout>
  );
};

//Styled

const MovDetailStyled = styled(motion.div)`
  color: white;
`;
const StyledDesc = styled.div`
  flex: 1;
  padding-left: 5rem;
  p {
    padding: 0rem;
    font-size: 1rem;
  }
  h4 {
    font-weight: lighter;
    padding: 0.8rem 0rem;
  }
  .line {
    width: 60%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  li {
    border: 2px solid #23d997;
    border-radius: 15px;
    list-style: none;
    display: inline-block;
    margin: 5px 2px;
    padding: 0.2rem 0.5rem;
  }
  @media (max-width: 1200px) {
    padding: 0;
    margin-top: 3rem;
  }
`;
const HeadLineStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  min-height: 90vh;
  padding: 5rem 10rem;
  position: relative;
  img {
    border-radius: 25px;
    width: auto;
    height: 70vh;
  }
  @media (max-width: 1200px) {
    display: block;
    img {
      object-fit: cover;
      display: block;
      margin-right: auto;
      margin-left: auto;
    }
  }

  @media (max-width: 600px) {
    padding: 2rem 3rem;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

const ReviewStyled = styled.div`
  padding: 1rem 10rem;
  h2 {
    padding: 1rem;
    font-size: 4rem;
  }
  h3 {
    padding: 1rem;
    font-size: 1.5;
  }
  p {
    padding: 1rem;
    cursor: pointer;
  }
  .faq-line {
    overflow: hidden;
    background: #23d997;
    height: 0.2rem;
    width: 100%;
    margin: 1rem 0rem;
  }
  @media (max-width: 600px) {
    padding: 2rem 3rem;
  }
`;

const SingleReview = styled.div`
  border: 2px solid #23d997;
  margin-bottom: 10px;
  border-radius: 2px;
  padding: 1rem;
  h3 {
    font-size: 2rem;
  }
  p {
    font-weight: lighter;
    font-size: 0.8rem;
  }
`;
export default MovieDetailComp;
