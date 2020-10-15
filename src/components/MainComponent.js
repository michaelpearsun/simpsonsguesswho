import React, { Component } from 'react';
import Character from './CharacterComponent';


export class Main extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            characters: [
                {
                  id: 1,
                  name: 'Bart',
                  image: 'https://th.bing.com/th/id/OIP.1h5k3iMPVIDjKLvla6hG7QHaNK?w=115&h=180&c=7&o=5&pid=1.7',
                  quotes: "Eat my shorts"
                },
                {
                  id: 2,
                  name: 'Lisa',
                  image: 'https://th.bing.com/th/id/OIP.esSf-HyKonjFG1WP932bCQHaHa?w=182&h=182&c=7&o=5&pid=1.7',
                  quotes: "Shut up, brain! I've got friends now. I don't need you anymore."
                },
                {
                  id: 3,
                  name: 'Milhouse',
                  image: 'https://static.fusionmovies.to/images/character/a0Ono6ADfydwrI2VkoVjZiyg2q8Z40L63-iZeSIhXpqr7ugtxgl3cVVZqRyoDYe_HIlXl82MoIpNUgoqzuyLa8Imp9vujISPsqRdaugin-k.jpg?1',
                  quotes: "Everything’s coming up Milhouse!"
                }
              ]
        };
    }
    

    render() {
        return (
            <div>
                <Character characters={this.state.characters} />
            </div>
        )
    }
}

export default Main;
