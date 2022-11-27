import styles from "./Gift.module.css";

const Gift = () => {
  return (
    <div className={styles.gift}>
      <div className={styles.cover}></div>
      <div className={styles.base}></div>
      <div className={styles.tie01}></div>
      <div className={styles.tie02}></div>
    </div>
  );
};

export default Gift;
