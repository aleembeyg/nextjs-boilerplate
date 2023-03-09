import { useState } from "react";
import styles from "./index.module.scss";
import CardsSlider from "../cardsSlider";
import { Grid } from "@mui/material";

const Cards = () => {
  const [cards, setCards] = useState([1, 2]);
  return (
    <Grid container className={styles.CardsContainer} alignItems="center" justifyContent="center" spacing={2}>
      {cards.map((index: number) => (
        <Grid key={index} item xs={12} sm={6} md={4}>
          <CardsSlider />
        </Grid>
      ))}
    </Grid>
  );
};
export default Cards;
