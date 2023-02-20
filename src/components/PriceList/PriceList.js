import React from "react";
import "./PriceList.scss";
import "../../components/mediaQueries.scss";
import { Divider } from "antd";
import { BsCurrencyDollar } from "react-icons/bs";
import { Col, Container, Row } from "react-bootstrap";

export const PriceList = () => {
  const priceContent = [
    {
      pack: "Starter Pack",
      price: "39",
      packDetail: [
        { size: "30GB", content: "Clean Design" },
        {
          size: "1",
          content: "Database",
        },
        {
          size: "20",
          content: "Users",
        },
        {
          size: "Multi",
          content: "Purpose",
        },
        {
          size: "",
          content: "X",
        },
        {
          size: "Light",
          content: "& Fast",
        },
      ],
    },
    {
      pack: "Medium Pack",
      price: "57",
      packDetail: [
        { size: "30GB", content: "Clean Design" },
        {
          size: "1",
          content: "Database",
        },
        {
          size: "20",
          content: "Users",
        },
        {
          size: "Multi",
          content: "Purpose",
        },
        {
          size: "",
          content: "X",
        },
        {
          size: "Light",
          content: "& Fast",
        },
      ],
    },
    {
      pack: "Larger Pack",
      price: "99",
      packDetail: [
        { size: "30GB", content: "Clean Design" },
        {
          size: "1",
          content: "Database",
        },
        {
          size: "20",
          content: "Users",
        },
        {
          size: "Multi",
          content: "Purpose",
        },
        {
          size: "",
          content: "X",
        },
        {
          size: "Light",
          content: "& Fast",
        },
      ],
    },
  ];
  return (
    <div className="align">
      <p>Price List</p>
      <h1>WE OFFER</h1>
      <Container className="mt-5">
        <Row>
          {priceContent.map((each) => (
            <>
              <Col xs={12} md={12} lg={4}>
                <div
                  className={
                    each.pack === "Medium Pack"
                      ? "highlighted-card p-4"
                      : "align p-3 normal-card"
                  }
                >
                  <h3>{each.pack}</h3>
                  <div className="price-detail">
                    <BsCurrencyDollar />
                    <h1 className="price-icons">{each.price}</h1>
                  </div>
                  <h2>/ Month</h2>
                  <Divider />
                  {each.packDetail.map((eachDetail) => (
                    <>
                      <div className="price-content-container">
                        <h4>{eachDetail.size}</h4>
                        <h5>{eachDetail.content}</h5>
                      </div>
                      <Divider />
                    </>
                  ))}
                  <button
                    className={
                      each.pack === "Medium Pack"
                        ? "button-gray"
                        : "button-blue"
                    }
                  >
                    BUY OFFER
                  </button>
                </div>
              </Col>
            </>
          ))}
        </Row>
      </Container>
    </div>
  );
};
