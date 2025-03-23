import React from "react";
import ReactPlayer from "react-player";
import { Modal, Button } from "react-bootstrap";

const MovieTrailer = ({ show, handleClose, trailerUrl }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Movie Trailer</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex justify-content-center">
        {trailerUrl ? (
          <ReactPlayer url={trailerUrl} controls width="100%" height="400px" />
        ) : (
          <p>Trailer not available</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MovieTrailer;
