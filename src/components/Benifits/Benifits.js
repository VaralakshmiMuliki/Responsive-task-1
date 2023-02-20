import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsClock } from "react-icons/bs";
import { TfiGift } from "react-icons/tfi";
import { IoDiamondOutline } from "react-icons/io5";
import {AiOutlineCheckCircle} from 'react-icons/ai'
import "./Benifits.scss";
import '../../components/mediaQueries.scss'
export const Benifits = () => {
  const benifits = [
    {
      logo: <BsClock className="benifit-logo" />,
      heading: "Easy to setup",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donecaliquet est et congue aliquet.",
    },

    {
      logo: <TfiGift className="benifit-logo" />,
      heading: "Easy to setup",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donecaliquet est et congue aliquet.",
    },
    {
      logo: <IoDiamondOutline className="benifit-logo" />,
      heading: "Easy to setup",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donecaliquet est et congue aliquet.",
    },
  ];

  return (
    <Container className='mt-5 mb-5'>
      <Row>
        {benifits.map((benifit) => (
          <Col xs="12" lg="4" className="benifits-card-container p-4">
            <div className="logo-container">{benifit.logo}
            <div className='check-icon-box'>
                <AiOutlineCheckCircle className='check-icon'/>
            </div>
            </div>

            <h1 className="benifit-title">{benifit.heading}</h1>
            <p className="description">{benifit.description}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
