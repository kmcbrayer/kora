import React from 'react';

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
                    {game.name}
                </li>
            )
        ) : (
            <div> Loading... </div>
        )}
    </ul>
);

export default GameSelectionList;
