import styles from "./style.module.css";

interface propsCounter {
  text: string;
  value: number;
  onChange: (newValue: number) => void;
}

const Counter = ({ text, value, onChange }: propsCounter) => {
  const sub = () => {
    onChange(value - 1);
  };
  const add = () => onChange(value + 1);

  return (
    <div className={styles.counter}>
      <span className={styles.text}>{text}</span>
      <span className={styles.value}>{value}</span>
      <div className={styles.btns}>
        <button className={styles.btn} onClick={sub}>
          -
        </button>
        <button className={styles.btn} onClick={add}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
