import React from "react";
import "./Counter.scss";
import "../../components/mediaQueries.scss";
import CountUp from "react-countup";
import { Col, Container, Row } from "react-bootstrap";

export const Counter = () => {
  const countDetails = [
    {
      start: "0",
      end: "109",
      head: "Days",
      des: "Making",
    },
    {
      start: "0",
      end: "28",
      head: "Team",
      des: "Meetings",
    },
    {
      start: "0",
      end: "87",
      head: "Tea",
      des: "Cups",
    },
    {
      start: "0",
      end: "784",
      head: "Perfected",
      des: "Design",
    },
  ];
  return (
    <Container className="mt-5 counter-container mb-5">
      <Row>
        {countDetails.map((eachCount) => (
          <Col  xs="12" md="12" lg="3"   className="counter-table">
            <CountUp
              className="counter-number"
              start={eachCount.start}
              end={eachCount.end}
              duration={5}
            />
           
            <div className="counter-column">
              <h2>{eachCount.head}</h2>
              <p>{eachCount.des}</p>
            </div>
          </Col>
        ))}
      </Row>
      <hr className="mb-4 w-100"/>
    </Container>
  );
};
