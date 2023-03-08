import Slider from "react-slick";
import { useState } from "react";
import styles from "./index.module.scss";
const settings = {
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: "60px",
  dots: true,
  arrows: false,
};
const CardsSlider = () => {
  const [cards, setCards] = useState([1, 2, 3, 4]);
  return (
    <Slider {...settings}>
      {cards.map((index: number) => (
        <div key={index}>
          <p className="card-validity">
            <span>
              <i></i> Valid for <strong> 60 days </strong>{" "}
            </span>
          </p>
          <img
            src="https://cards.talkhome.co.uk/assets/imgs/section-imgs/th-cc-10.png"
            alt=""
          />
          <button className={styles.buyNow}>Buy Now</button>
        </div>
      ))}
    </Slider>
  );
};
export default CardsSlider;
