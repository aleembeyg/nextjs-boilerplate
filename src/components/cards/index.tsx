import Slider from "react-slick";
import { useState, useRef } from "react";
import styles from "./index.module.scss";
import CardsSlider from "../cardsSlider";

const Cards = () => {
  const [drag, setDrag] = useState(true);
  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerPadding: "60px",
    dots: false,
    arrows: true,
    draggable: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  const [cards, setCards] = useState([1, 2, 3, 4]);
  return (
    <Slider {...settings}>
      {cards.map((index: number) => (
        <div key={index}>
          <CardsSlider />
        </div>
      ))}
    </Slider>
  );
};
export default Cards;
