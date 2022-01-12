import {
  ADD_TODO,
  LOAD_TODOS,
  SHOW_LOADER,
  HIDE_LOADER,
  UPDATE_CURRENT,
  REMOVE_TODO,
  ERROR_MESSAGE
} from './types'

const initialState = {
  todos: [],
  currentTodo: '',
  isLoading: false,
  message: '',
}

function reducer(state = initialState, action){
  switch (action.type) {
    case LOAD_TODOS:
      return {
        ...state,
        todos: action.payload,
      }
    case ADD_TODO: {
      const todos = [...state.todos, action.payload]
      return {
        ...state,
        todos,
        currentTodo: '',
      }
    }
    case UPDATE_CURRENT:{
      return {
        ...state,
        currentTodo: action.payload,
      }
    }
    case REMOVE_TODO: {
      const todos = state.todos.filter(todo => todo.id !== action.payload)
      return {
        ...state,
        todos,
      }
    }
    case ERROR_MESSAGE: {
      return {
        ...state,
        message: action.payload,
      }
    }
    case SHOW_LOADER:
    case HIDE_LOADER:
      return {
        ...state,
        isLoading: action.payload,
      }
    default:
      return state
  }
}


export default reducer
