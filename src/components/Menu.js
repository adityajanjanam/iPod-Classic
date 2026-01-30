import React from 'react';
import "../css/Menu.css"
import game from "../static/game.jpg"
import music from "../static/music.jpg"
import settings from "../static/settings.png"

// Renders main menu
class Menu extends React.Component {
    handleClick = (index) => {
        const { updateActiveMenu, changeMenuForward, currentMenu } = this.props;
        updateActiveMenu(index > this.props.active ? 1 : -1, currentMenu);
        if (index === this.props.active) {
            changeMenuForward(index, currentMenu);
        }
    }

    render() {
        const { active, menuItems, songImgUrl } = this.props;
        const iconMap = {
            "Now Playing": "fa-music",
            "Music": "fa-compact-disc",
            "Games": "fa-gamepad",
            "Settings": "fa-gear",
        };
        return (
            <div className="menu-container">
                <div className="menu">
                    <div className="menu-title">Main Menu</div>
                    <ul className="menu-list" role="menu" aria-label="Main menu options">
                        {menuItems.map((element, index) => {
                            const isActive = active === index;
                            return (
                                <li 
                                    key={index} 
                                    className={`menu-item ${isActive ? 'active' : ''}`}
                                    onClick={() => this.handleClick(index)}
                                    style={{cursor: 'pointer'}}
                                    role="menuitem"
                                    tabIndex={isActive ? 0 : -1}
                                >
                                    <i className={`fas ${iconMap[element] || 'fa-circle'}`} aria-hidden="true"></i>
                                    <span>{element}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="leaf">
                    {active === 0 && <img className="leaf-img" src={songImgUrl} alt="Now playing" />}
                    {active === 1 && <img className="leaf-img" src={music} alt="Music" />}
                    {active === 2 && <img className="leaf-img" src={game} alt="Games" />}
                    {active === 3 && <img className="leaf-img" src={settings} alt="Settings" />}
                </div>
            </div>
        );
    }
}


export default Menu;