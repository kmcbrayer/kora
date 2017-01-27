import React from 'react';
import { Link } from 'react-router';

const GameSelectionList = ({ games, onGameClick }) => (
    <ul>
        {games.map(game =>
            <li
                key={game.id}
                className="game-item"
                onClick={() => onGameClick(game.id)}
            >
                {game.name}
            </li>
        )}
    </ul>
);

export default GameSelectionList;
