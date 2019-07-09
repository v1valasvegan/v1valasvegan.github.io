import React from 'react';

import styles from './Item.module.css';

function Item({ item, onClickDone, onClickDelete }) {
  return (
    <div className={styles.wrapper}>
      <input
        type='checkbox'
        className={styles.checkbox}
        id={item.id}
        defaultChecked={item.isDone}
      />
      <label
        htmlFor={item.id}
        className={styles.label}
        onClick={() => onClickDone(item.id)}
      >
        {item.value}
      </label>
      <button
        className={styles['button_delete']}
        onClick={() => onClickDelete(item.id)}
      />
    </div>
  );
}

export default Item;
