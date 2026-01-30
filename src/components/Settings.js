import React from 'react';
import "../css/Settings.css"

 // Renders settings
class Settings extends React.Component {
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
        const items = ["Themes", "Wheel Color", "Wallpaper"];
        return (
            <div className="settings">
                <h2>Settings</h2>
                <ul>
                    {items.map((item, index) => (
                        <li 
                            key={index}
                            className={active === index ? "active" : ""}
                            onClick={() => this.handleClick(index)}
                            style={{cursor: 'pointer'}}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

        )
    }

}


export default Settings;