import { useState } from "react";
import styles from "./style.module.css";
import Card from "../components/Card";
import Link from "next/link";
import Counter from "../components/Counters";

const Home = () => {
  const [qttDoors, setQttDoors] = useState(3);
  const [putGift, setPutGift] = useState(1);

  const isValidValues = () => {
    const checkDoors = qttDoors >= 3 && qttDoors <= 20;
    const checkGift = putGift >= 1 && putGift <= qttDoors;

    if (checkDoors && checkGift) {
      return `/game/${qttDoors}/${putGift}`;
    } else {
      return "";
    }
  };

  return (
    <div className={styles.home}>
      <div>
        <Card bgcolor="#c0392c">
          <h1 className={styles.title}>Monty Hall</h1>
        </Card>
        <Card>
          <Counter
            text={"Quant. de Portas"}
            value={qttDoors}
            onChange={(newQtt) => setQttDoors(newQtt)}
          />
        </Card>
      </div>
      <div>
        <Card>
          <Counter
            text={"Porta Premiada"}
            value={putGift}
            onChange={(newNum) => setPutGift(newNum)}
          />
        </Card>
        <Link href={isValidValues()} className={styles.link}>
          <Card bgcolor="#28a085">
            <h2>Iniciar</h2>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default Home;
