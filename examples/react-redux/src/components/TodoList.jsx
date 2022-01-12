/**
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import TodoItem from './TodoItem';
import { fetchTodos, deleteTodo } from '../store/actions';

const TodoList = ({ filter }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  const onToggleTodo = (id) => {
    console.log('onToggleTodo', id);
  };

  const onDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  useEffect(async () => {
    dispatch(fetchTodos())
  }, [])

  useEffect(() => {
    if (filter === 'completed') {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  }, [filter]);

  return (
    <div className="Todo-List">
      <ul>
        {todos.filter(i => i.isCompleted === isCompleted).map((todo) => (
          <TodoItem
            key={todo.id}
            onToggleTodo={onToggleTodo}
            onDeleteTodo={onDeleteTodo}
            {...todo}
          />
        ))}
      </ul>
    </div>
  );
};

/**
 * Typechecking props
 */
TodoList.propTypes = {
  filter: PropTypes.string,
};

TodoList.defaultProps = {
  filter: null,
};


export default TodoList;
