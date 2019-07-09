import React from 'react';
import classnames from 'classnames';

import styles from './TodoHeader.module.css';

function TodoHeader({ todoItems, activeFilter, onClickSetActive }) {
  const filters = [
    {
      id: 'incompleted',
      name: 'Незавершенные',
      count: todoItems.filter(item => !item.isDone).length
    },
    {
      id: 'completed',
      name: 'Завершенные',
      count: todoItems.filter(item => item.isDone).length
    },
    {
      id: 'all',
      name: 'Все',
      count: todoItems.length
    }
  ];
  return (
    <header className={styles.header}>
      <h1 className={styles.heading}>Список моих дел</h1>
      <ul className={styles['filters-list']}>
        {filters
          .filter(item => item)
          .map(item => (
            <li key={item.id}>
              <button
              className={classnames({
                [styles.button]: true,
                [styles.active]: (item.id === activeFilter)
              })}
              onClick={() => onClickSetActive(item)}
              >
                {item.name + ' '}
                <span className={styles.number}>{item.count}</span>
              </button>
            </li>
          ))}
      </ul>
    </header>
  );
}

export default TodoHeader;