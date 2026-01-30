import React from 'react';

// Renders wallpaper menu
class Wallpaper extends React.Component {
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
        return (
            <div className="music">
                <h2>Wallpaper Select</h2>
                <ul>
                    {["AudioTapes","BlueCubes","BlueJelly"].map((element,index)=>{
                        return <li 
                            key={index} 
                            className={active===index ? "active theme-li" : "theme-li"}
                            onClick={() => this.handleClick(index)}
                            style={{cursor: 'pointer'}}
                        >
                            {element}
                        </li>
                    })}
                </ul>
            </div>

        )
    }

}

export default Wallpaper;