import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const offers = [
  {
    img: "https://static.vecteezy.com/system/resources/previews/000/267/648/original/special-offer-sale-banner-in-hexagonal-shape-with-stars-vector.jpg",
    title: "Get ₹100 Cashback",
    description: "Pay via Paytm and get ₹100 cashback on sports tickets!",
  },
  {
    img: "https://i.pinimg.com/originals/fe/e0/32/fee032d5e3de699717278bd1210195c8.jpg",
    title: "Buy 1 Get 1 Free",
    description: "Book two movie tickets and pay for just one!",
  },
  {
    img: "https://static.vecteezy.com/system/resources/previews/000/186/450/original/special-offer-golden-label-with-ribbon-vector.jpg",
    title: "50% Off on Movie Tickets",
    description: "Use code MOVIE50 to get 50% off on your next booking!",
  },
];

const Offers = () => {
  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">🎉 Special Offers</h2>
      <Row>
        {offers.map((offer, index) => (
          <Col key={index} xs={12} sm={6} md={4} className="mb-4">
            <Card className="shadow-lg h-100">
              <Card.Img
                variant="top"
                src={offer.img}
                className="img-fluid offer-img"
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-center">{offer.title}</Card.Title>
                <Card.Text className="text-center">
                  {offer.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Offers;
