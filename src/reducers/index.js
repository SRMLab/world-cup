import { combineReducers } from 'redux';
import GameStartReducer from './reducer_gameStart';

const rootReducer = combineReducers({
  game: GameStartReducer,
});

export default rootReducer;
