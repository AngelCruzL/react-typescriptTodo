import classes from './TodoItem.module.css';

const TodoItem: React.FC<{ todoText: string }> = props => {
  return <li className={classes.item}>{props.todoText}</li>;
};

export default TodoItem;
