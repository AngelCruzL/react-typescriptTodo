import Todo from '../models/todo';
import TodoItem from './TodoItem';

const Todos: React.FC<{ items: Todo[] }> = props => {
  return (
    <ul>
      {props.items.map(item => (
        <TodoItem key={item.id} todoText={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
