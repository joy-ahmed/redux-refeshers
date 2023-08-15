import React from "react";
import { connect } from "react-redux";
import { AnyAction, Dispatch, bindActionCreators } from "redux";
import { addCharacterById } from "../actions";

const Character_list = (props) => {
  console.log(props);
  return (
    <div>
      <h4>Characters</h4>
      <ul>
        {props.characters.map((character) => (
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

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
  return bindActionCreators({ addCharacterById }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Character_list);
