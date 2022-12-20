import React, {
  createContext,
  useReducer,
  useEffect,
} from 'react';
import AppReducer from '../reducers/AppReducer';
import { log } from '../utils/logger'

const { env: { NODE_ENV }} = process

const initialState = {
  NODE_ENV,
  modal: {},
  question: null,
  correct: null,
  streak: [],
  debug: null,
  loading: null,
  leaderboard: null,
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({
  children
}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions for changing state
  function setModal(data) {
    dispatch({
      type: 'UPDATE_MODAL',
      payload: data
    });
  }

  function setQuestion(data) {
    dispatch({
      type: 'UPDATE_QUESTION',
      payload: data
    });
  }

  function setCorrect(data) {
    dispatch({
      type: 'UPDATE_CORRECT',
      payload: data
    });
  }

  function setStreak(data) {
    dispatch({
      type: 'UPDATE_STREAK',
      payload: data
    });
  }

  function setDebug(data) {
    dispatch({
      type: 'UPDATE_DEBUG',
      payload: data
    });
  }

  function setLoading(data) {
    dispatch({
      type: 'UPDATE_LOADING',
      payload: data
    });
  }

  function setLeaderboard(data) {
    dispatch({
      type: 'UPDATE_LEADERBOARD',
      payload: data
    });
  }

  useEffect(() => {
    log('state', 'rgb(217, 38, 169)', state);
  }, [state])

  return ( <GlobalContext.Provider value = {
      {
        ...state,
        setModal,
        setQuestion,
        setCorrect,
        setStreak,
        setDebug,
        setLoading,
        setLeaderboard,
      }
    } > {
      children
    } </GlobalContext.Provider>
  )
}