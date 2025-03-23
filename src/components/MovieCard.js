import React, { useState } from "react";
import { Card, Button, Modal, Container, Row, Col } from "react-bootstrap";
import MovieTrailer from "./MovieTrailer";

const MovieCard = ({ movie }) => {
  const [showTrailer, setShowTrailer] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const totalSeats = 30;
  const seatPrice = movie.price;

  // Toggle seat selection
  const handleSeatClick = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  // Confirm Booking
  const handleConfirmBooking = () => {
    alert(`Booking Confirmed! 🎟 Seats: ${selectedSeats.join(", ")}`);
    setShowBooking(false);
    setSelectedSeats([]);
  };

  return (
    <>
      <Card
        style={{
          width: "18rem",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
        className="shadow-lg"
      >
        <div style={{ width: "100%", height: "300px", overflow: "hidden" }}>
          <Card.Img
            variant="top"
            src={movie.img}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderTopLeftRadius: "8px",
              borderTopRightRadius: "8px",
            }}
          />
        </div>
        <Card.Body className="d-flex flex-column justify-content-between">
          <Card.Title>{movie.name}</Card.Title>
          <Card.Text>
            <small>
              <b>Genre:</b> {movie.genre}
            </small>
            <br />
            <small>
              <b>Release Date:</b> {movie.releaseDate}
            </small>
            <br />
            <small>
              <b>Rating:</b> {movie.rating} ⭐
            </small>
            <br />
            <small>
              <b>Price:</b> ${movie.price}
            </small>
          </Card.Text>
          <div className="d-flex justify-content-between">
            <Button variant="primary" onClick={() => setShowBooking(true)}>
              Book Now
            </Button>
            <Button variant="danger" onClick={() => setShowTrailer(true)}>
              🎥 Watch Trailer
            </Button>
          </div>
        </Card.Body>
      </Card>

      {/* Movie Trailer Modal */}
      <MovieTrailer
        show={showTrailer}
        handleClose={() => setShowTrailer(false)}
        trailerUrl={movie.trailerUrl}
      />

      {/* Seat Selection Modal */}
      <Modal show={showBooking} onHide={() => setShowBooking(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Select Your Seats</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              {[...Array(totalSeats)].map((_, index) => {
                const seatNumber = index + 1;
                return (
                  <Col key={seatNumber} xs={3} className="p-1 text-center">
                    <Button
                      variant={
                        selectedSeats.includes(seatNumber)
                          ? "success"
                          : "outline-secondary"
                      }
                      onClick={() => handleSeatClick(seatNumber)}
                      className="w-100"
                    >
                      {seatNumber}
                    </Button>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <p className="m-0">
            Selected: {selectedSeats.length} | Total: $
            {selectedSeats.length * seatPrice}
          </p>
          <Button variant="secondary" onClick={() => setShowBooking(false)}>
            Cancel
          </Button>
          <Button
            variant="success"
            onClick={handleConfirmBooking}
            disabled={selectedSeats.length === 0}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MovieCard;
