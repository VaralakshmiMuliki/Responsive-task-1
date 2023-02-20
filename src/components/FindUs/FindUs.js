import React from "react";
import "./FindUs.scss";
// import "../../components/mediaQueries.js";
import { Col, Container, Row } from "react-bootstrap";

export const FindUs = () => {
  const socialMedia = [
    {
      media: "Facebook",
      image:
        "	https://jevelin.shufflehound.com/wp-content/uploads/2016/01/Soc_fb.png",
    },
    {
      media: "Twitter",
      image:
        "https://jevelin.shufflehound.com/wp-content/uploads/2016/01/Soc_twit.png",
    },
    {
      media: "Youtube",
      image:
        "https://jevelin.shufflehound.com/wp-content/uploads/2016/01/Soc_yt.png",
    },
  ];
  return (
    <div className="findus-container">
      <Container>
        <Row>
          {socialMedia.map((each) => (
            <Col
            xs={12} md={12} lg={4}
              style={{
                backgroundSize: "cover",
                backgroundImage: `url(${each.image})`,
                height: "30vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2>Find us on</h2>
              <h1>{each.media}</h1>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
