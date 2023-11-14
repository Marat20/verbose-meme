import { useState } from 'react';
import styles from './button.module.scss';

export const Button = () => {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => setCount((prev) => prev + 1)}
      className={styles.button}>
      {count}
    </button>
  );
};
