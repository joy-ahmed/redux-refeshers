import { ADD_CHARACTER } from '../actions';
import { createCharacter } from './helpers';
type HerosAction = {
    type: string,
    id: number
}


function heros(state = [], action: HerosAction) {
    switch(action.type) {
        case ADD_CHARACTER:
            return [...state, createCharacter(action.id)]
        default:
            return state
    }
}


export default heros;