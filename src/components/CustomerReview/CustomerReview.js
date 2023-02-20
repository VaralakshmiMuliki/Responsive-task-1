import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-grid-carousel";
import "./CustomerReview.scss";
import "../../components/mediaQueries.scss";
import { BsBookmark } from "react-icons/bs";

export const CustomerReview = () => {
  const logos = [
    "https://jevelin.shufflehound.com/wp-content/uploads/2016/01/W_logo_1.png",
    "https://jevelin.shufflehound.com/wp-content/uploads/2016/01/W_logo_2.png",
    "https://jevelin.shufflehound.com/wp-content/uploads/2016/02/W_logo_3.png",
    "https://jevelin.shufflehound.com/wp-content/uploads/2016/01/W_logo_1.png",
    "https://jevelin.shufflehound.com/wp-content/uploads/2016/01/W_logo_4.png",
    "https://jevelin.shufflehound.com/wp-content/uploads/2016/01/W_logo_5.png",
    "https://jevelin.shufflehound.com/wp-content/uploads/2016/01/W_logo_4.png",
    "https://jevelin.shufflehound.com/wp-content/uploads/2016/01/W_logo_4.png",
  ];

  const customerReview = [
    {
      img: "https://jevelin.shufflehound.com/wp-content/uploads/2016/01/Testimo_1_2.jpg",
      name: "Jonatan Dogue",
    },
    {
      img: "https://jevelin.shufflehound.com/wp-content/uploads/2016/01/Testimo_1_1.jpg",
      name: "Katey Gallardo",
    },
  ];
  return (
    <Container className="mt-5 mb-5">
      <Row className="">
        <Col sm="12" md="12" lg="6" className="logo-img-container">
          <Carousel
            cols={2}
            rows={1}
            gap={10}
            loop
            autoplay={true}
            mobileBreakpoint={false}
            hideArrow
            responsiveLayout={[
              {
                breakpoint: 320,
                cols: 1,
                rows: 2,
                gap: 1,
                loop: 1000,
                autoplay: true,
              },
              {
                breakpoint: 768,
                cols: 2,
                rows: 2,
                gap: 5,
                loop: 1000,
                autoplay: true,
              },
              {
                breakpoint: 1024,
                cols: 2,
                rows: 2,
                gap: 5,
                loop: 1000,
                autoplay: true,
              },
            ]}
          >
            {logos.map((each) => (
              <Carousel.Item>
                <img width="100%" src={each} alt="" className="logo" />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>

        <Col sm="12" md="12" lg="6" className=" p-3">
          <div className="skills-container">
            <h2>Testimonial</h2>
            <div className="skill-head">
              <strong>CUSTOMER REVIEW</strong>
            </div>
            <div className="star-container">
              <hr className="divider" />
              <BsBookmark className="star" />
              <BsBookmark className="star" />
              <BsBookmark className="star" />
              <hr className="divider" />
            </div>
          </div>
          <div className="customer-review-carousel">
            <Carousel
              containerClassName={"customer-review-content"}
              cols={1}
              rows={1}
              gap={10}
              loop
              autoplay={true}
            >
              {customerReview.map((each) => (
                <Carousel.Item className="bb">
                  <div className="customer-review-content align-center">
                    <img
                      width="100%"
                      src={each.img}
                      className="customer-image ml-5"
                      alt=""
                    />
                    <p className="mt-3 p-3 ">
                      Aenean consectetur lacinia diam a tincidunt. Vivamus
                      facilisis lacus non velit suscipit pellentesque. Nam ac
                      mauris nec mi lobortis sollicitudin sed at lacus. Fusce
                      volutpat, dolor in suscipit pharetra, lacus sapien
                      sollicitudin quam, non aliquam ex neque eu lectus.{" "}
                    </p>
                    <h5>{each.name}</h5>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
