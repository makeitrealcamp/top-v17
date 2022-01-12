import {
  ADD_TODO,
  LOAD_TODOS,
  SHOW_LOADER,
  HIDE_LOADER,
  UPDATE_CURRENT,
  REMOVE_TODO,
  ERROR_MESSAGE,
} from './types'

import {
  getTodos,
  createTodo,
  updateTodo,
  destroyTodo,
} from '../lib/todoServices'

// actions creators
export const updateCurrent = val => ({ type: UPDATE_CURRENT, payload: val })
export const loadTodos = todos => ({ type: LOAD_TODOS, payload: todos })
export const addTodo = todo => ({ type: ADD_TODO, payload: todo })
export const replaceTodo = todo => ({ type: REPLACE_TODO, payload: todo })
export const removeTodo = id => ({ type: REMOVE_TODO, payload: id })
export const showLoader = () => ({ type: SHOW_LOADER, payload: true })
export const hideLoader = () => ({ type: HIDE_LOADER, payload: false })
export const errorMessage = (message) => ({ type: ERROR_MESSAGE, payload: message })


// actions
export const fetchTodos = () => async (dispatch) => {
  dispatch(showLoader())

  try {
    const todos = await getTodos()
    dispatch(loadTodos(todos))
  } catch (error) {
    dispatch(errorMessage(error.message))
  } finally {
    dispatch(hideLoader())
  }

}

export const saveTodo = (todo) => async (dispatch) => {
  dispatch(showLoader())
  try {
    const todoCreated = await createTodo(todo)
    dispatch(addTodo(todoCreated))
  } catch (error) {
    dispatch(errorMessage(error.message))
  } finally {
    dispatch(hideLoader())
  }
}

export const deleteTodo = (id) => async (dispatch) => {
  dispatch(showLoader())
  try {
    await destroyTodo(id)
    dispatch(removeTodo(id))
  } catch (error) {
    dispatch(errorMessage(error.message))
  } finally {
    dispatch(hideLoader())
  }
}
