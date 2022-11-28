import { ReactNode } from "react";
import styles from "./style.module.css";

interface propsCard {
  bgcolor?: string;
  children?: ReactNode;
}

const Card = ({ bgcolor, children }: propsCard) => {
  return (
    <div className={styles.card} style={{ backgroundColor: bgcolor ?? "#fff" }}>
      {children}
    </div>
  );
};

export default Card;
