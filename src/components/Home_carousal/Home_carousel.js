import React, { Component } from "react";
import Slider from "react-slick";

import "./Home_carousal.css"
const images = require.context('./../../assets/carousel_images', true);

export default function Home_carousel() {
  console.log(images);
  const objects=[{
    "name":"Dentist",
    "description":"Teething troubles? Schedule a dental checkup",
    "image":null
  },
  {
    "name":"Gynecologist/Obstetrician",
    "description":"Explore for women's health, pregnancy and infertility treatments",
    "image":null
  },
  {
    "name":"Dietitian/Nutrition",
    "description":"Get guidance on eating right, weight management and sports nutrition",
    "image":null
  },
  {
    "name":"Physiotherapist",
    "description":"Pulled a muscle? Get it treated by a trained physiotherapist",
    "image":null
  },
  {
    "name":"General surgeon",
    "description":"Need to get operated? Find the right surgeon",
    "image":null
  },
  {
    "name":"Orthopedist",
    "description":"For Bone and Joints issues, spinal injuries and more",
    "image":null
  },
  {
    "name":"General physician",
    "description":"Find the right family doctor in your neighborhood",
    "image":null
  },
  {
    "name":"Pediatrician",
    "description":"Child Specialists and Doctors for Infant",
    "image":null
  },
  {
    "name":"Gastroenterologist",
    "description":"Explore for issues related to digestive system, liver and pancreas",
    "image":null
  }]
  images.keys().map((item, index) => { objects[index].image=images(item) });
  console.log(objects);
    const settings = {
      speed: 500,
      infinite:false,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    return (
      <div className='Section2_main'>
        <div className='Section2_heading'>
            Consult top doctors online
        </div>
        <h3>
        Private online consultations with verified doctors in all specilities
        </h3>
      <div className="Home_carousel" >
        <Slider {...settings} className="slick-carousel">
          {
             objects.map(object=>
              <div className='carousal-box'>
              <img src={object.image} >
              </img>
              <div className="carousel_heading">
                <b>
                  {object.name}
                </b>
              </div>
              <div className="carousel_des">
                {object.description}
              </div>
            </div>
        
             )
          }
        </Slider>
      </div>
      </div>
    );
  }
