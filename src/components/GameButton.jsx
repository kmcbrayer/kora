import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class GameButton extends Component {
    render() {
        let game = this.props.game;
        return (
            <Link to={`/categories`}>
                <li
                    style={{backgroundImage: `url(${game.gameImageURL})`}}
                    className="list-item"
                    onClick={() => this.props.onGameClick(game.id)}
                >
                    {game.name}
                </li>
            </Link>
        )
    }
}
