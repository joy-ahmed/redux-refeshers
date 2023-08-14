import { ADD_CHARACTER } from '../actions';
import characters_json from '../data/character.json';
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

function createCharacter(id: number) {
    return characters_json.find(c => c.id === id);
}

export default heros;