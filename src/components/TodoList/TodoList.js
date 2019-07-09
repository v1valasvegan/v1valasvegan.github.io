import React from 'react';
import Item from '../Item/Item';
import AddItemForm from '../AddItemForm/AddItemForm';

import styles from './TodoList.module.css';

function TodoList({ todoItems, onClickDone, onClickDelete, onSubmitAdd, activeFilter }) {
  function filter(item) {
    if(activeFilter === 'all') {
      return true;
    } else if(activeFilter === 'completed') {
      return (item.isDone);
    };
    return !item.isDone;
  }
  return (
    <section className={styles.section}>
        {todoItems.length > 0 && <ul className={styles['item-list']}>
          {todoItems.filter(item => filter(item)).map(item => (
            <li key={item.id} className={styles.item}>
              <Item
                item={item}
                onClickDone={onClickDone}
                onClickDelete={onClickDelete}
              />
            </li>
          ))}
        </ul>}
    {!todoItems.length > 0 && <div className={styles['div_snafu']}>
          <img className={styles.snafu} src={require('../../img/empty-list.svg')} alt='empty list' />
          <h2 className={styles.subheading}>Вы еще не добавили ни одной задачи</h2>
          <p className={styles.paragraph}>
            Сделайте это прямо сейчас
          </p>
        </div>}
        <AddItemForm onSubmitAdd={onSubmitAdd}
        todoItems={todoItems} />
    </section>
  );
}

export default TodoList;
