import React from 'react';

import styles from './Filters.module.css';

function Filters( {todoItems}) {
  return (
    <fieldset className={styles.filters}>
      <input type='radio' name='filter' id='completed' />
      <label className={styles.label} htmlFor='completed'>
        Завершенные
        <span className={styles.number} />
      </label>
      <input type='radio' name='filter' id='incompleted' />
      <label className={styles.label} htmlFor=''>
          Незавершенные
        <span className={styles.number} />
      </label>
      <input type='radio' name='filter' id='all' />
      <label className={styles.label} htmlFor=''>
          Все
        <span className={styles.number} />
      </label>
    </fieldset>
  );
};

export default Filters;
