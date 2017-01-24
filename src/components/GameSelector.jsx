import React from 'react';
import { Link } from 'react-router';

class GameSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            games: window.loadInfo && window.loadInfo.games || []
        }
    }

    render() {
        const gameItems = this.state.games.map((game) => {
            return (
                <li key={game.id} className="game-item">
                    {game.name}
                </li>
            );
        });

        return (
            <div>
                {this.state.games.length ? (
                    <ul>
                        {gameItems}
                    </ul>
                ) : (
                    "No games found"
                )}
            </div>
        );
    }
}

export default GameSelector;
