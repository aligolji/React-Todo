import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      task: 'from App this.state.task',
      completed: 'from App this.state.completed doesnt need to render',
    };
  }

  changeHandler = e => {

  }


  submitHandler = e => {
    e.preventDefault();
    this.submit()
    console.log('SUBMITTED!')

  }


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <p>{this.state.task}</p>
        <p>{this.state.completed}</p>
        <TodoForm submitHandler={this.submitHandler} />
        <TodoList />
        {/*Todo array props get passed to TodoList*/}
      </div>
    );
  }
}

export default App;




// `<App />` will hold all the data needed for this project. It will also be the container for your Todo Components.

//   - All of your application data will be stored here on `<App />`.

//   - All of your `handler` functions should live here on `<App />`.

// We want you to worry about function over form today.

// - Your todo list should display a list of todos, an input field, a submit button, and a clear all button.