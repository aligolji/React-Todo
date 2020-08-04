import React from 'react';
import Todo from './Todo';


//takes props from App component of Todo array - <TodoList />

//iterates over list of items in Todo array - .map()

//generates new Todo for each element in Todo array - <Todo />

const TodoList = props => {


    return (
        <div>
            <span>from TodoList</span>
            <Todo />
        </div>
    )
}





export default TodoList;

// `<TodoList />` receives your Todos array and iterates over the list generating a new `<Todo />` for each element in the array.