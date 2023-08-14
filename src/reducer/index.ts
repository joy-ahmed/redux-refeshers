import { combineReducers } from 'redux';
import characters_json from '../data/character.json';
import { ADD_CHARACTER } from '../actions';


interface Character {
    id: number,
    name: string,
    strength: number,
    intelligence: number,
    speed: number
}

type CharacterAction = {
    type: string,
    id: number
}
type HerosAction = {
    type: string,
    id: number
}

function characters(state: Character[] = characters_json, action: CharacterAction){
    switch(action.type){
        case ADD_CHARACTER:
            return state.filter(item => item.id !== action.id);
        default:
            return state;
    }
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

const rootReducer = combineReducers({
    characters,
    heros
})

export default rootReducer;
