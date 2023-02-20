import React from "react";
import "./Story.scss";
import "../../components/mediaQueries.scss";
import { Col, Container, Row } from "react-bootstrap";
import { BsStar } from "react-icons/bs";

export const Story = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs="12" md="12" lg="6" className="story-img-container">
          <img
            src="https://jevelin.shufflehound.com/wp-content/uploads/2016/01/Agency_about_us_1.jpg"
            alt="img"
            className="story-img"
          />
        </Col>
        <Col xs="12" md="12" lg="6" className="story-text-container">
          <h2 className="brand-since">Brand Since</h2>
          <h2 className="brand-since">1975</h2>
          <strong>THE STORY ABOUT US</strong>

          <div className="star-container">
            <hr className="divider" />

            <BsStar className="star" />
            <BsStar className="star" />
            <BsStar className="star" />
            <hr className="divider" />
          </div>
          <p className="story-des">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            viverra tempor rhoncus. Integer iaculis augue metus, eget luctus ex
            tristique sed. Suspendisse egestas lacinia magna et rutrum. Nunc vel
            est vel augue mollis gravida. Aenean hendrerit felis a suscipit
            accumsan. Pellentesque mi metus, condimentum quis maximus eu, ornare
            dapibus elit. Sed sit amet tellus in lacus euismod efficitur. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra
            tempor rhoncus.
          </p>
          <img
            src="https://jevelin.shufflehound.com/wp-content/uploads/2016/01/Agency_signature.png"
            alt="signature"
            className="mb-4"
          />
        </Col>
      </Row>
    </Container>
  );
};
