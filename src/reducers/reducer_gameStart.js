import { girls, boys } from '../data';

const initialState = {
  selected_gender: null,
  people: [],
  winner: []
};

export default function(state =  initialState, action) {
  console.log("state: ", state);
  switch(action.type) {
  case 'GENDER_SELECTED':
    const people = (action.payload === 'female') ? girls : boys;
    console.log("People", people)

    return {
      ...state, selected_gender: action.payload, people
    };

  case 'PERSON_SELECTED':
    const winner = [...state.winner, action.payload]
    return {
      ...state, winner
    }
  }
  

  
  return state;
}