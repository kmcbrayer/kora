import React from 'react';
import { Link } from 'react-router-dom';

const GameSelectionList = ({ games, onGameClick }) => (
    <ul>
        {/* might need to pull these out into their own components */}
        { games ? (
            games.map(game =>
                <li
                    key={game.id}
                    className="list-item"
                    onClick={() => onGameClick(game.id)}
                >
                    <Link to={`/categories`}>{game.name}</Link>
                </li>
            )
        ) : (
            <div> Loading... </div>
        )}
    </ul>
);

export default GameSelectionList;
