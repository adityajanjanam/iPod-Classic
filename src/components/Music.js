import React from 'react';
import "../css/Music.css"

// Renders music menu
class Music extends React.Component {
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
        const {musicItems,active} = this.props;
        return (
            <div className="music">
                <h2>Music</h2>
                <ul>
                {musicItems.map((element, index)=>{
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


export default Music;