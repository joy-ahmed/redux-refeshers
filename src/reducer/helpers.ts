import characters_json from '../data/character.json';

export function createCharacter(id: number) {
    return characters_json.find(c => c.id === id);
}
