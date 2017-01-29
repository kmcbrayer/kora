import React from 'react';
import { Link } from 'react-router';

const GameSelectionList = ({ games, onGameClick }) => (
    <ul>
        {/* might need to pull these out into their own components */}
        { games ? (
            games.map(game =>
                <li
                    key={game.id}
                    className="game-item"
                    onClick={() => onGameClick(game.id)}
                >
                    {game.name}
                </li>
            )
        ) : (
            <div> No Games Found</div>
        )}
    </ul>
);

export default GameSelectionList;
