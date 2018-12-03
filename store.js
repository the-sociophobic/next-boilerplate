import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const initialState = {
  currentUser: 5,
  currentDate: '2018-05-14',
}

export const actionTypes = {
  USER: 'USER',
  DATE: 'DATE',
}

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER:
      return Object.assign({}, state, {
        currentUser: action.user
      })
    case actionTypes.DATE:
      return Object.assign({}, state, {
        currentDate: action.date
      })
    default: return state
  }
}

// ACTIONS
export const changeUser = (user) => dispatch => {
  return dispatch({ type: actionTypes.USER, user: user })
}

export const changeDate = (date) => dispatch => {
  return dispatch({ type: actionTypes.DATE, date: date })
}

export function initializeStore (initialState = initialState) {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}