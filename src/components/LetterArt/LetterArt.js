import React from "react";
import "./LetterArt.scss";
import "../../components/mediaQueries.scss";
import Carousel from "react-grid-carousel";
import { Card } from "antd";
import {AiOutlineTag} from 'react-icons/ai';

export const LetterArt = () => {
  const cardData = [
    {
      img: "https://jevelin.shufflehound.com/wp-content/uploads/2016/02/Blog_1-1024x683.jpg",
      head: "The team watchers",
    },
    {
      img: "https://jevelin.shufflehound.com/wp-content/uploads/2016/02/Blog_2-1024x683.jpg",
      head: "Creative day off",
    },
    {
      img: "https://jevelin.shufflehound.com/wp-content/uploads/2016/02/Blog_3-1024x683.jpg",
      head: "The smel of roses",
    },
    {
      img: "https://jevelin.shufflehound.com/wp-content/uploads/2016/01/Blog_4-1024x683.jpg",
      head: "Discovering the space",
    },
    {
      img: "https://jevelin.shufflehound.com/wp-content/uploads/2016/01/Blog_5-1024x683.jpg",
      head: "The new Research",
    },
    {
      img: "https://jevelin.shufflehound.com/wp-content/uploads/2016/01/Blog_6-1024x683.jpg",
      head: "New delivery system",
    },
  ];
  const MyDot = ({ isActive }) => (
    <span
      style={{
        marginTop: "20px",
        display: "inline-block",
        height: isActive ? "16px" : "5px",
        width: isActive ? "16px" : "5px",
        borderRadius: "8px",
        background: isActive ? "#47c9e5" : "gray",
      }}
    ></span>
  );
  return (
    <div className=" art-container">
     
        <h1>Letter art</h1>
        <h2 className="mb-3">BLOG & NEWS</h2>
    
      <Carousel
        mobileBreakpoint={767}
        rows={1}
        cols={3}
        hideArrow={true}
        showDots={true}
        dot={MyDot}
        
        responsiveLayout={[
          {
            breakpoint: 768,
            cols: 2,
            rows: 1,
            gap: 10,
            loop: true,
            // autoplay: 1000,
          },
          
        ]}
      >
        {cardData.map((each) => (
          <Carousel.Item className='carousel-container'>
            <div className="letter-art-card">
              <img width="100%" src={each.img} alt="" />
              <h3>{each.head}</h3>
              <p>by shufflehound Feb 18 2022</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus ultrices diam lorem, sit amet ullamcorper elit
                vulputate posuere. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Nulla nec lacus
                ultricies, rhoncus risus eget, sodales ex. In malesuada urna
                magna. Vestibulum ante…
              </p>
              
               <div className="d-flex p-2">
             
                <p>DESIGN, NEWS</p>
               </div>
                 
            

            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
