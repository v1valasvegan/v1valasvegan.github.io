import React from 'react';
import TodoHeader from '../TodoHeader/TodoHeader';
import TodoList from '../TodoList/TodoList';

import styles from './Todo.module.css';

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoItems: [
        {
          value: 'important',
          isDone: false,
          id: 1
        },
        {
          value: 'urgent',
          isDone: true,
          id: 2
        },
        {
          value: 'miscellaneous',
          isDone: true,
          id: 3
        }
      ],
     
      activeFilter: 'all', 
    };
  }
      

  onClickDone = id => {
    const newItemList = this.state.todoItems.map(item => {
      const newItem = { ...item };
      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }
      return newItem;
    });
    this.setState({ todoItems: newItemList });
  };

  onClickDelete = id =>
    this.setState(state => ({
      todoItems: this.state.todoItems.filter(item => item.id !== id)
    }));

  onSubmitAdd = value =>
    this.setState(state => ({
      todoItems: [
        ...state.todoItems,
        {
          value,
          isDone: false,
          id: this.state.todoItems.length + 1
        }
      ]
    }));

    onClickSetActive = item => 
    this.setState(state => ({
      activeFilter: item.id
    }))

  render() {
    return (
      <main className={styles.todo}>
        <TodoHeader
          todoItems={this.state.todoItems}
          activeFilter={this.state.activeFilter}
          onClickSetActive={this.onClickSetActive}
        />
        <TodoList
          todoItems={this.state.todoItems}
          onClickDone={this.onClickDone}
          onClickDelete={this.onClickDelete}
          onSubmitAdd={this.onSubmitAdd}
          activeFilter={this.state.activeFilter}
        />
      </main>
    );
  }
}

export default Todo;
