import styles from "./Door.module.css";
const Door = ({ selected }) => {
  const isSelected = selected ? styles.selected : "";
  return (
    <div className={styles.area}>
      <div className={`${styles.frame} ${isSelected}`}>
        <div className={styles.door}>
          <div className={styles.number}>3</div>
          <div className={styles.knob}></div>
        </div>
      </div>
      <div className={styles.bottom}></div>
    </div>
  );
};

export default Door;
