import { log } from '../utils/logger'

export default (state, action) => {

  const d = new Date();
  log('→', 'rgb(229, 231, 235)', d.toLocaleTimeString());
  log('action', 'rgb(251, 189, 35)', action);

  switch (action.type) {
    case 'UPDATE_MODAL':
      return {
        ...state,
        modal: action.payload,
      }
    case 'UPDATE_QUESTION':
      return {
        ...state,
        question: action.payload,
      }
    case 'UPDATE_CORRECT':
      return {
        ...state,
        correct: action.payload,
      }
    case 'UPDATE_STREAK':
      return {
        ...state,
        streak: action.payload,
      }
    case 'UPDATE_DEBUG':
      return {
        ...state,
        debug: action.payload,
      }
    case 'UPDATE_LOADING':
      return {
        ...state,
        loading: action.payload,
      }
    case 'UPDATE_LEADERBOARD':
      return {
        ...state,
        leaderboard: action.payload,
      }
    case 'UPDATE_HIGH_SCORE':
      return {
        ...state,
        highScore: action.payload,
      }
    case 'UPDATE_SET_DISPLAY_HIGH_SCORE':
      return {
        ...state,
        displayHighScore: action.payload,
      }
    default:
      return state;
  }
}