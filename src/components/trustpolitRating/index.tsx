import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import { rating } from "@/utils/index.utils";

function TrustPolitRating(props: any) {
  const [starRating, setStarRating] = useState(
    isNaN(props.rating) ? 0 : props.rating
  );
  const [show, setShow] = useState(false);
  useEffect(() => {
    const mod = parseFloat((props.rating % 1).toFixed(1));
    setStarRating(
      mod == 0
        ? props.rating
        : mod < 0.3
        ? Math.trunc(props.rating)
        : Math.trunc(props.rating) + 0.5
    );
    setShow(true);
  }, []);

  return (
    <>
      {show && (
        <div className={styles.ratingContainer}>
          <Image
            className={styles.turstpilotLogo}
            alt=""
            sizes=""
            priority={true}
            src="https://cdn.trustpilot.net/brand-assets/1.1.0/logo-black.svg"
            fill
          />
          <div
            className={styles.ratingPanel}
            style={{
              backgroundImage: `url('https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-${starRating}.svg')`,
            }}
          ></div>
          <div className={styles.ratingContent}>{props.rating} Rated Excellent</div>
          <div className={styles.ratingContent + " " + styles.ratingContentMM}> Excellent</div>
        </div>
      )}
    </>
  );
}

export default TrustPolitRating;
