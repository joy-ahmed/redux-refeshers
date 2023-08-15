import React from "react";
import { connect } from "react-redux";

const Character_list = ({ characters }) => {
  console.log(characters);
  return (
    <div>
      <h4>Characters</h4>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    characters: state.characters,
  };
}

export default connect(mapStateToProps, null)(Character_list);
