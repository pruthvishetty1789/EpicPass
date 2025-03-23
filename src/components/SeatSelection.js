import React, { useState } from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";

const SeatSelection = ({ show, handleClose, movie }) => {
  const totalSeats = 30;
  const [selectedSeats, setSelectedSeats] = useState([]);
  const bookedSeats = [2, 5, 12, 20];

  const toggleSeatSelection = (seatNumber) => {
    if (bookedSeats.includes(seatNumber)) return; // Prevent booking booked seats
    setSelectedSeats((prev) =>
      prev.includes(seatNumber)
        ? prev.filter((seat) => seat !== seatNumber)
        : [...prev, seatNumber]
    );
  };

  const handleConfirm = () => {
    alert(`Tickets booked for ${selectedSeats.length} seats! 🎉`);
    setSelectedSeats([]); // Clear selection after booking
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Book Tickets - {movie.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row className="g-2 text-center">
            {[...Array(totalSeats)].map((_, index) => {
              const seatNumber = index + 1;
              return (
                <Col key={seatNumber} xs={2}>
                  <Button
                    variant={
                      bookedSeats.includes(seatNumber)
                        ? "danger"
                        : selectedSeats.includes(seatNumber)
                        ? "success"
                        : "outline-secondary"
                    }
                    className="w-100"
                    onClick={() => toggleSeatSelection(seatNumber)}
                    disabled={bookedSeats.includes(seatNumber)}
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
        <span className="me-auto">
          <b>Total Price:</b> ${selectedSeats.length * movie.price}
        </span>
        <Button
          variant="primary"
          onClick={handleConfirm}
          disabled={selectedSeats.length === 0}
        >
          Confirm Booking
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SeatSelection;
