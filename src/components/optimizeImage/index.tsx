import Image from "next/image";
import styles from "./index.module.scss";

const OptimizeImage = ({ src = "", alt = "" }: any) => {
  return (
    <Image
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
      priority={true}
      className={styles.optimizeImage}
      fill
      src={src}
      alt={alt}
    />
  );
};

export default OptimizeImage;
