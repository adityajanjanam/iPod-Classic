import React from 'react';
import "../css/Themes.css"

// Renders themes menu
class Themes extends React.Component {
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
                <h2>Theme Select</h2>
                <ul>
                    {["Rose Gold","Space Gray","Gold","Light Purple","Black"].map((element,index)=>{
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


export default Themes;