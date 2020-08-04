import React from 'react';


const TodoForm = props => {

//takes props from AppComponent - <TodoForm />

    return (
        <div className='TodoForm'>
            <form >
                <label htmlFor='task'>
                    from todoForm
                <input
                    type=''
                    name='task'
                    value=''
                    onChange=''
                />
                </label>
                <button>Add Todo</button>
                            {/*submit button - onClick and on key press - enter key*/}
                <button>Clear Completed</button>
                            {/*will need onClick */}
            </form>
        </div>
    );
}




export default TodoForm;

// `<TodoForm>` will hold your input field and your `Add Todo` and `Clear Completed` buttons.

//Your input field should take in user input, and allow a user to press `Enter` or click on the `Submit Button` to add a todo to your list.


// - Once a todo is submitted, the Todo List should re-render and show the added todo.