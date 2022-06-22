import { setText } from '../redux/actions/textAction';
import { setTask, changeStatus } from '../redux/actions/tasksAction';
import { deleteTodo } from '../redux/actions/tasksAction';
import { useDispatch, useSelector } from 'react-redux';
// import { useState } from 'react';

const ToDo = () => {
  const dispatch = useDispatch();
  const text = useSelector((store) => store.text);
  const todos = useSelector((store) => store.todos);
  // const [edit, setEdit] = useState(text);

  const addTodo = () => {
    dispatch(setText(''));
    dispatch(setTask(text));
  };

  // const className = 'task';
  const onEditTask = (text) => {
    const newTaskText = window.prompt('Текст задачи', text);
    if (!newTaskText) {
      return;
    }
    // setEdit(newTaskText);

    // const newList = lists.map((list) => {
    //   if (list.id === listId) {
    //     list.tasks = list.tasks.map((task) => {
    //       if (task.id === taskObj.id) {
    //         task.text = newTaskText;
    //       }
    //       return task;
    //     });
    //   }
    //   return list;
    // });
  };

  return (
    <div>
      <h1 className="top">Todo List </h1>
      <label className="task-input">
        <input
          value={text}
          onChange={(e) => dispatch(setText(e.target.value))}
        />
        <button onClick={() => addTodo()}>Add todo</button>
      </label>

      {todos.map((item) => (
        <p key={item.id} className="task">
          <span>
            <input
              type="checkbox"
              onChange={() => dispatch(changeStatus(item.id))}
            />
            <span className="text-todo"> {item.text}</span>
          </span>

          <span>
            <span onClick={() => onEditTask()}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="edit"
              >
                <path
                  d="M0 12.0504V14.5834C0 14.8167 0.183308 15 0.41661 15H2.9496C3.05792 15 3.16624 14.9583 3.24123 14.875L12.34 5.78458L9.21542 2.66001L0.124983 11.7504C0.0416611 11.8338 0 11.9337 0 12.0504ZM14.7563 3.36825C14.8336 3.29116 14.8949 3.1996 14.9367 3.0988C14.9785 2.99801 15 2.88995 15 2.78083C15 2.6717 14.9785 2.56365 14.9367 2.46285C14.8949 2.36205 14.8336 2.27049 14.7563 2.19341L12.8066 0.24367C12.7295 0.166428 12.638 0.105146 12.5372 0.0633343C12.4364 0.021522 12.3283 0 12.2192 0C12.1101 0 12.002 0.021522 11.9012 0.0633343C11.8004 0.105146 11.7088 0.166428 11.6318 0.24367L10.107 1.76846L13.2315 4.89304L14.7563 3.36825V3.36825Z"
                  fill="black"
                />
              </svg>
            </span>{' '}
            <span
              className="delete"
              onClick={() => dispatch(deleteTodo(item.id))}
            >
              ❌
            </span>
          </span>
        </p>
      ))}
    </div>
  );
};

export default ToDo;
