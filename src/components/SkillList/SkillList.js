import React from "react";
import "./SkillList.scss";
import "../../components/mediaQueries.scss";
import { Progress } from "antd";
import { Col, Container, Row } from "react-bootstrap";
import { TfiKey } from "react-icons/tfi";
import ReactCompareImage from "react-compare-image";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export const SkillList = () => {
  const skillSet = [
    {
      skill: "Programming Skills",
      persentage: "75%",
      color: "#268194",
    },
    {
      skill: "Designing Skills",
      persentage: "85%",
      color: "#39A5BC",
    },
    {
      skill: "Managing Skills",
      persentage: "90%",
      color: "#47C9E5",
    },
  ];

  const after =
    "https://jevelin.shufflehound.com/wp-content/uploads/2016/01/Home_1_curtain_2-1024x727.png";
  const before =
    "https://jevelin.shufflehound.com/wp-content/uploads/2016/01/Home_1_curtain_1-compressor-1024x727.png";

  return (
    <Container>
      <Row>
        <Col xs="12" md="12" lg="6" className="p-5 mb-5 skill-head-container">
          <div className="skills-container">
            <h2>Skill List</h2>
            <div className="skill-head">
              <strong>CRAFTING THE VISION</strong>
            </div>
            <div className="star-container">
              <hr className="divider" />

              <TfiKey className="star" />
              <TfiKey className="star" />
              <TfiKey className="star" />
              <hr className="divider" />
            </div>
            <p className="skill-des">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              viverra tempor rhoncus. Integer iaculis augue metus, eget luctus
              ex tristique sed. Suspendisse egestas lacinia magna et rutrum.
            </p>
          </div>
          <div className="mt-4 ">
            {skillSet.map((each) => (
              <>
                <div className="bar-head">
                  <h2>{each.skill}</h2>
                  <h3>{each.persentage}</h3>
                </div>
                <Progress
                  percent={75}
                  status="active"
                  type="line"
                  showInfo={false}
                  strokeColor={{
                    "0%": each.color,
                    "100%": each.color,
                  }}
                />
              </>
            ))}
          </div>
        </Col>
        <Col xs="12" md="12" lg="6" className="image-mask-container mb-5">
          <div className="compare-imag-container">
            <ReactCompareImage
              hover={true}
              vertical={false}
              leftImage={before}
              rightImage={after}
              handle={
                <div className="handle-button align">
                  <div className="d-flex">
                    <AiOutlineArrowLeft className="arrows" />
                    <AiOutlineArrowRight className="arrows" />
                  </div>
                </div>
              }
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
