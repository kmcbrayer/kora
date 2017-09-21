import React from 'react';
import { Link } from 'react-router-dom';
import GameButton from './GameButton.jsx';

const GameSelectionList = ({ games, onGameClick }) => (
    <ul>
        {/* might need to pull these out into their own components */}
        { games ? (
            games.map(game =>
                <GameButton key={game.id} game={game} onGameClick={onGameClick} />
            )
        ) : (
            <div> Loading... </div>
        )}
    </ul>
);

export default GameSelectionList;
