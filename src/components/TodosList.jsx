import { useContext } from 'react';
import { TodosContext } from '../TodosContext.jsx';
import Todo from './Todo.jsx';




function TodosList() {

  const store = useContext(TodosContext)


  return (
    <>
      <div className="todos">

        {
          store.filterTodos().map(todo => {
            return <Todo todo={todo} key={todo.id} />
          })
        }

      </div>
    </>
  )
}

export default TodosList