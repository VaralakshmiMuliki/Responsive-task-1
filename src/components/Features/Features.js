import React from "react";
import "./Features.scss";
import "../../components/mediaQueries.scss";
import { Col, Container, Row } from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";
import { SlDiamond } from "react-icons/sl";
import {IoExpand} from "react-icons/io5";
import {TbAdjustments} from 'react-icons/tb';
import {IoInfinite} from 'react-icons/io5';
import {GiElectric} from 'react-icons/gi';
import {SlMagicWand} from 'react-icons/sl';
import {IoHelpBuoyOutline} from 'react-icons/io5'

export const Features = () => {
  const featureArray = [
    {
      icon: <SlDiamond  className="feature-icon" />,
      head: "Clean Design",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt justo non massa porta molestie. ",
    },
    {
      icon: <IoExpand  className="feature-icon" />,
      head: "Fully Responsive",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt justo non massa porta molestie. ",
    },
    {
        icon: <TbAdjustments  className="feature-icon" />,
        head: "CustomiZable",
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt justo non massa porta molestie. ",
      },
      {
        icon: <IoInfinite  className="feature-icon" />,
        head: "Multy Purpose",
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt justo non massa porta molestie. ",
      },
      {
        icon: <GiElectric  className="feature-icon" />,
        head: "Light & Fast theme",
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt justo non massa porta molestie. ",
      },{
        icon: <SlMagicWand  className="feature-icon" />,
        head: "One Click Instal",
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt justo non massa porta molestie. ",
      },
      {
        icon: <IoHelpBuoyOutline  className="feature-icon" />,
        head: "One Click Instal",
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt justo non massa porta molestie. ",
      }
     
  ];
  return (
    <Container className="feature-container">
      <Row>
        <Col xs="12" md="12" lg="3" className="mb-5 align feature-head-column">
          <h1 className="theme-head">Theme Main</h1>
          <Typewriter
            className="type-write"
            words={["HIGHLIGHTS", "FEATURES"]}
            loop={10}
            cursor
            cursorStyle="_"
            typeSpeed={90}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </Col>

        {featureArray.map((eachFeature) => (
          <Col xs="12" md="12" lg="3" className="p-4 feature-matter-column">
            <div className="feature-matter d-flex justify-content-center align-items-center text-align-center">
              {eachFeature.icon}
              <h2>{eachFeature.head}</h2>
            </div>
            <div className="text-align-center des">
              <hr className="mb-4" />
              <p className="mb-5 feature-des">{eachFeature.des}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
