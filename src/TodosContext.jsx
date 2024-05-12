import { useEffect } from "react";
import { useContext ,useReducer, createContext, useState} from "react";

export const TodosContext = createContext()

const initialTodos = localStorage.getItem('todos').length ? JSON.parse(localStorage.getItem('todos')) : []



export function TodosContextProvider({ children }) {

    const [todos, dispatch] = useReducer(TodosReducer, initialTodos)
    const [modalIsActive, setModalIsActive] = useState(false)
    const [filterBy, setFilterBY] = useState('')

    function filterTodos() {
        switch(filterBy) {
            case 'Done': return todos.filter(todo => todo.isDone)
            case "To-Do": return todos.filter(todo => !todo.isDone)
            default: return todos
        }
    }
    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify(todos))
    },[todos])

    return (
        <>
            <TodosContext.Provider value={{
                todos,
                dispatch,
                modalIsActive,
                setModalIsActive,
                filterBy,
                setFilterBY,
                filterTodos
            }}>
                {children}
            </TodosContext.Provider>
        </>
    )
}

function TodosReducer(todos, action) {
    switch (action.type) {
        case 'deleted': {
            return todos.filter(todo => todo.id !== action.id)
        }
        case 'toggle': {
            return todos.map(todo => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        isDone: !todo.isDone
                    }
                } else return todo
            })
        }
        case 'toggleDelete': {
            return todos.filter(todo => !todo.isDone)
        }
        case 'addTodo': {
            return [
                ...todos,
                {
                    title: action.title,
                    description: action.description,
                    id: action.id,
                    isDone: action.isDone
                }
            ]
        }
        default: return todos
    }
}

export function useTodos() {
    return useContext(TodosContext)
}