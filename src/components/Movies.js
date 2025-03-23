import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MovieCard from "./MovieCard";

const Movies = () => {
  const movies = [
    {
      img: "https://s40830.pcdn.co/wp-content/uploads/2024/02/Dune-2_Sdtk_Cover_01_3000px_RGB_300dpi-scaled.jpg",
      name: "Dune: Part II",
      genre: "Action, Sci-Fi",
      releaseDate: "2024-04-26",
      rating: 8.4,
      price: 10,
      trailerUrl: "https://youtu.be/Way9Dexny3w?si=lQCCilSJgnHr-c6w",
    },
    {
      img: "https://pics.filmaffinity.com/a_different_man-726904726-large.jpg",
      name: "A Different Man",
      genre: "Sci-Fi, Drama",
      releaseDate: "2024-11-07",
      rating: 8.6,
      price: 12,
      trailerUrl: "https://youtu.be/_9CmC5Rmsdw?si=KSzs0OOcdPnfE8NN",
    },
    {
      img: "https://images5.alphacoders.com/112/thumb-1920-1122037.jpg",
      name: "Inception",
      genre: "Sci-Fi, Thriller",
      releaseDate: "2010-07-16",
      rating: 8.0,
      price: 15,
      trailerUrl: "https://youtu.be/8hP9D6kZseM?si=OnKmjxfOH6fSp1Lf",
    },
    {
      img: "https://media2.bollywoodhungama.in/wp-content/uploads/2016/03/ZNMD-Poster-Feature.jpg",
      name: "Zindagi Na Milegi Dobara",
      genre: "Sci-Fi, Drama",
      releaseDate: "2011-08-16",
      rating: 9.7,
      price: 15,
      trailerUrl: "https://youtu.be/FJrpcDgC3zU?si=VXtzlin03QrH1A4K",
    },
    {
      img: "https://picfiles.alphacoders.com/331/331477.jpg",
      name: "Queen",
      genre: "Sci-Fi, drama",
      releaseDate: "2013-01-25",
      rating: 7.8,
      price: 15,
      trailerUrl: "https://youtu.be/KGC6vl3lzf0?si=GA7JnUBzohT83-vD",
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BY2Q3Nzc5ZDAtOTk0NS00NzU5LWJiZmMtMWQ2ZTBhYTdkMDUwXkEyXkFqcGc@._V1_.jpg",
      name: "His Three Daughters",
      genre: "Sci-Fi, Drama",
      releaseDate: "2010-07-16",
      rating: 8.4,
      price: 15,
      trailerUrl: "https://youtu.be/hzjGORDx5uE?si=XHtz86PjNRNz95Qq",
    },

    {
      img: "https://filmduty.com/wp-content/uploads/2020/12/wEHkOBcvEiNZpFU1O3HbZLoKSaE.jpg",
      name: "Like Stars on Earth",
      genre: "Sci-Fi, Drama",
      releaseDate: "2010-07-16",
      rating: 9.8,
      price: 15,
      trailerUrl: "https://youtu.be/EFfocv9BdwY?si=jlvfQ3R__jJv--kG",
    },
    {
      img: "https://wallpaperaccess.com/full/13870972.jpg",
      name: "Jawan.",
      genre: "Sci-Fi, Action",
      releaseDate: "2023-07-16",
      rating: 8.8,
      price: 15,
      trailerUrl: "https://youtu.be/MWOlnZSnXJo?si=zjbCK7oJDiIGomjw",
    },
    {
      img: "https://wallpapercave.com/wp/wp8202320.jpg",
      name: "Student of the year",
      genre: "Sci-Fi, Drama",
      releaseDate: "2013-07-16",
      rating: 8.5,
      price: 12,
      trailerUrl: "https://youtu.be/fivOhPjX9YM?si=A7_fd7KQrsXLgnxH",
    },
  ];

  return (
    <Container>
      <h2 className="mt-4">Now Showing</h2>
      <Row className="justify-content-center">
        {movies.map((movie, index) => (
          <Col
            key={index}
            xs={12}
            sm={6}
            md={4}
            className="mb-4 d-flex justify-content-center"
          >
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Movies;
