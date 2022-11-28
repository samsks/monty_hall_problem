import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Door from "../../../components/Door";
import DoorModel from "../../../models/door";
import styles from "./style.module.css";

const Game = () => {
  const [doors, setDoors] = useState([]);

  const router = useRouter();

  const createDoors = (quantity: number, indexGift: number): DoorModel[] => {
    return Array.from({ length: quantity }, (_, i) => {
      const number = i + 1;
      const withGift = number === indexGift;
      return new DoorModel(number, withGift);
    });
  };

  useEffect(() => {
    if (router.query.doors && router.query.withGift) {
      const paramsDoors = +router.query.doors;
      const paramsGift = +router.query.withGift;
      setDoors(createDoors(paramsDoors, paramsGift));
    }
  }, [router?.query]);

  const updateDoors = (
    doorsList: DoorModel[],
    doorWithGift: DoorModel
  ): DoorModel[] => {
    return doorsList.map((door) => {
      const withGift = door.number === doorWithGift.number;

      if (withGift) {
        return doorWithGift;
      } else {
        return doorWithGift.opened ? door : door.unselectDoor();
      }
    });
  };

  const renderDoors = () => {
    return doors.map((door) => (
      <Door
        key={door.number}
        value={door}
        onChange={(newDoor) => setDoors(updateDoors(doors, newDoor))}
      />
    ));
  };

  return (
    <div className={styles.game}>
      <ul className={styles.doors}>{renderDoors()}</ul>
      <div className={styles.link}>
        <Link href={"/"}>Reiniciar Jogo</Link>
      </div>
    </div>
  );
};

export default Game;
