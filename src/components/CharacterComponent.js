import React, { Component } from 'react'

class Character extends Component {


  render() {
    const directory = this.props.characters.map(character => {
        return (
            <div key={character.id} className="col">
                <img src={character.image} alt={character.name} />
                <h2>{character.name}</h2>
                <p>{character.quotes}</p>
            </div>
        );
    });
  
    return (
        <div className="container">
            <div className="row">
                {directory}
            </div>
        </div>
    );
  }

}




export default Character;