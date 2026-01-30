import React from 'react';
import "../css/Music.css"

// Renders games menu
class Games extends React.Component {
    handleClick = (index) => {
        const { updateActiveMenu, changeMenuForward, currentMenu, active } = this.props;
        if (index !== active) {
            const direction = index > active ? 1 : -1;
            updateActiveMenu(direction, currentMenu);
        } else {
            changeMenuForward(index, currentMenu);
        }
    }

    render() {
        const {active} = this.props;
        const games = ["Snake", "Brick Breaker", "Memory Game", "Flappy Bird"];
        return (
            <div className="music">
                <h2>Games</h2>
                <ul>
                {games.map((element, index)=>{
                            return <li 
                                key={index} 
                                className={active===index ? "active" : ""}
                                onClick={() => this.handleClick(index)}
                                style={{cursor: 'pointer'}}
                            >
                                &nbsp;{element}
                            </li>
                        })}
                </ul>
            </div>

        )
    }

}


export default Games;
