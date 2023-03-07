import styles from "./home.module.scss";
import Head from "next/head";
import { useRouter } from "next/router";
import Topup from "@/components/topup";
import { Card } from "@mui/material";
import { FormattedMessage, useIntl } from "react-intl";
import Slider from "react-slick";
import { useState } from "react";
const settings = {
  dots: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  centerPadding: "60px",
  responsive: [
    {
      breakpoint: 1120,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: false,
      },
    },
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
};
export default function Home() {
  const [cards, setCards] = useState([1,2,3,4]);
  const intl = useIntl();

  const title = intl.formatMessage({ id: "page.home.head.title" });
  const description = intl.formatMessage({
    id: "page.home.head.meta.description",
  });

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <section className={styles.homeSection}>
        <Card className={styles.cardPanel} sx={{ boxShadow: 3 }}>
          <h1 className="heading">
            <FormattedMessage id="page.home.title" />
          </h1>
          <h2>
            <FormattedMessage id="page.home.description" />
          </h2>
          <Topup />
        </Card>
      </section>
      <section>
        <div className={`${styles.packages} slider-packages`}>
          <div className="full-bg right"></div>
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
        </div>
      </section>
    </>
  );
}
