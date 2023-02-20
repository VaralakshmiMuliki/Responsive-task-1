import React from "react";
import "./IntroCarousel.scss";
import Carousel from "react-bootstrap/Carousel";

export const IntroCarousel = () => {
  const introCarousel = [
    {
      image:
        "https://cdn.jevelin.shufflehound.com/wp-content/uploads/2016/03/Home_1_slide_2.jpg",
      title: "Welcome to Jevelin",
      tagLine: "THE BEST RESULT FOR YOUR BISUINESS",
      description: "",
      button: "",
    },
    {
      image:
        "https://cdn.jevelin.shufflehound.com/wp-content/uploads/2016/03/Home_1_slide_3.jpg",
      title: "Discover and create",
      tagLine: "THE NEW HORIZON",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      button: "Theme Features",
    },
    {
      image:
        "https://cdn.jevelin.shufflehound.com/wp-content/uploads/2016/03/Home_1_slide_1.jpg",
      title: "Greetings",
      tagLine: "HELLO WE ARE JEVELIN",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      button: "Strat a tour",
    },
  ];
  return (
    <>
      <Carousel className="carousel-container">
        {introCarousel.map((each) => (
          <Carousel.Item>
            <img className="d-block w-100" src={each.image} alt="First slide" />
            <Carousel.Caption className="caption-to-carousel">
              <h3>{each.title}</h3>
              <h1>{each.tagLine}</h1>
              <p>{each.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};
