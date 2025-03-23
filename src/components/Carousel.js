import React from "react";
import Carousel from "react-bootstrap/Carousel";

const slidesData = {
  movies: [
    {
      img: "https://wallpaperaccess.com/full/787536.jpg",
      title: "Avengers: Endgame",
      description: "The epic conclusion to the Infinity Saga.",
    },
    {
      img: "https://wallpapercave.com/wp/wp1818008.jpg",
      title: "Interstellar",
      description: "A mind-bending journey beyond space and time.",
    },
    {
      img: "https://getwallpapers.com/wallpaper/full/f/6/8/96681.jpg",
      title: "Avatar",
      description: "Live in your city! Book your tickets now.",
    },
    {
      img: "https://wallpapercave.com/wp/bKUpMqC.jpg",
      title: "The Exorcist",
      description: "Live in your city! Book your tickets now.",
    },
  ],
  sports: [
    {
      img: "https://images7.alphacoders.com/411/411202.jpg",
      title: "Football Championship",
      description: "Experience the thrill of live football!",
    },
    {
      img: "https://wallpaperaccess.com/full/2604895.jpg",
      title: "Cricket World Cup",
      description: "Watch your favorite teams battle for glory.",
    },
  ],
  events: [
    {
      img: "https://billetto.co.uk/blog/wp-content/uploads/2019/04/hanny-naibaho-388579-unsplash-e1554461063517.jpg",
      title: "Music Festival",
      description: "Live music, food, and fun – all in one place!",
    },
    {
      img: "https://offloadmedia.feverup.com/secretnyc.co/wp-content/uploads/2018/02/16080755/Untitled-33-1024x597.jpg",
      title: "Stand-up Comedy Night",
      description: "Laugh out loud with the best comedians!",
    },
  ],
  offers: [
    {
      img: "https://thumbs.dreamstime.com/b/online-shopping-promotional-sale-banner-fast-shopping-cart-full-colorful-bags-gifts-boxes-online-shopping-promotional-sale-168812516.jpg",
      title: "₹100 Cashback on Sports",
      description: "Pay via Paytm and get ₹100 cashback on sports tickets!",
    },

    {
      img: "https://cedcommerce.com/blog/wp-content/uploads/2021/08/6-Facebook-Carousel-Ads-Best-Practices-That-Convert-1200x675-1.jpg",
      title: "Mega Offer - Buy 1 Get 1",
      description: "Buy one movie ticket and get one free. Limited time only!",
    },
  ],
};

const CarouselPage = ({ category }) => {
  const slides = slidesData[category] || slidesData.movies;

  return (
    <Carousel className="mb-4">
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={slide.img}
            alt={slide.title}
            style={{ height: "400px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselPage;
