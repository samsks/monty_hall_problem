import DoorModel from "../../models/door";
import Gift from "../Gift";
import styles from "./style.module.css";

interface doorProps {
  value: DoorModel;
  onChange: (newDoor: DoorModel) => void;
}

const Door = ({ value, onChange }: doorProps) => {
  const isSelected = value.selected && !value.opened ? styles.selected : "";

  const handleSelectedDoor = () => onChange(value.selectDoor());
  const openDoor = (e: React.SyntheticEvent): void => {
    e.stopPropagation();
    onChange(value.openDoor());
  };

  const renderDoor = () => {
    return (
      <div className={styles.door}>
        <div className={styles.number}>{value.number}</div>
        <div className={styles.knob} onClick={openDoor}></div>
      </div>
    );
  };

  return (
    <li className={styles.area} onClick={handleSelectedDoor}>
      <div className={`${styles.frame} ${isSelected}`}>
        {value.closed ? renderDoor() : value.withGift ? <Gift /> : false}
      </div>
      <div className={styles.bottom}></div>
    </li>
  );
};

export default Door;
