import React from 'react';
import classnames from 'classnames';

import styles from './AddItemForm.module.css';

class AddItemForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      error: false
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const valueArray = this.props.todoItems.map(item => item.value);

    if (!valueArray.includes(this.state.inputValue)) {
      this.setState({
        inputValue: ''
      });
      this.props.onSubmitAdd(this.state.inputValue);
    } else {
      this.setState({
        error: true
      });
    }
  };

  render() {
    return (
      <form className={classnames({
            [styles.form]: true,
            [styles.snafu]: this.state.error
          })}
      onSubmit={this.handleSubmit}
      >
        <input
          type='text'
          className={styles.input}
          placeholder='Просто введите сюда название дела'
          value={this.state.inputValue}
          required
          onChange={event =>
          this.setState({
              inputValue: event.target.value,
              error: false,
          })}
        />
        <input type='submit' className={styles['button_add']} value=''></input>
      </form>
    );
  }
}

export default AddItemForm;
