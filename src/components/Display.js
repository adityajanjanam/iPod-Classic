import React from 'react';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
import Music from '../components/Music';
import Songs from '../components/Songs';
import Settings from '../components/Settings';
import Playing from '../components/Playing';
import Games from '../components/Games';
import "../css/Display.css"
import Themes from './Themes';
import WheelColor from './WheelColor';
import Wallpaper from './Wallpaper';

// On the basis of what the current menu is this item will render only that component
// Also this displays the navigation bar
// Key for displaying menu
// {-2: lock screen, -1 : main menu, 0 : now playing, 1: music menu, 2,5,6 : dummy menu, 3: setings menu,4:songs menu, 7:music playing, 8 :themes menu, 9:wheel color menu, 10:wallpaper menu}

class Display extends React.Component {
    render() {
        const { active, currentMenu, menuItems, musicItems,songItems, playing, songIndex, audio, songUrl ,songImgUrl,wallpaper,wallpaperItems, noty, setNoty,notifyText, changeMenuForward, updateActiveMenu, togglePlayPause} = this.props;
        
        return (
            <div style={{backgroundImage:`url(${wallpaperItems[wallpaper]})`}} className="display">
                <Navbar noty={noty} setNoty={setNoty} playing={playing} notifyText ={notifyText} />
                {currentMenu === -1 && <Menu songImgUrl={songImgUrl} menuItems={menuItems} active={active} changeMenuForward={changeMenuForward} updateActiveMenu={updateActiveMenu} currentMenu={currentMenu}/>}
                {currentMenu === 1 && <Music musicItems={musicItems} active={active} changeMenuForward={changeMenuForward} updateActiveMenu={updateActiveMenu} currentMenu={currentMenu}/>}
                {currentMenu === 2 && <Games active={active} changeMenuForward={changeMenuForward} updateActiveMenu={updateActiveMenu} currentMenu={currentMenu}/>}
                {currentMenu === 3 && <Settings active={active} changeMenuForward={changeMenuForward} updateActiveMenu={updateActiveMenu} currentMenu={currentMenu}/>}
                {currentMenu === 4 && <Songs songItems={songItems} active={active} changeMenuForward={changeMenuForward} updateActiveMenu={updateActiveMenu} currentMenu={currentMenu}/>}
                {currentMenu === 5 && <div className="blank-div"><h1 className="empty-text">Artists</h1></div>}
                {currentMenu === 6 && <div className="blank-div"><h1 className="empty-text">Albums</h1></div>}
                {(currentMenu === 0 ||currentMenu===7) && <Playing songImgUrl={songImgUrl} audio={audio} songUrl={songUrl} playing={playing} songIndex={songIndex} songItems={songItems} togglePlayPause={togglePlayPause}/>}
                {currentMenu===8&&<Themes active={active} changeMenuForward={changeMenuForward} updateActiveMenu={updateActiveMenu} currentMenu={currentMenu}/>}
                {currentMenu===9&&<WheelColor active={active} changeMenuForward={changeMenuForward} updateActiveMenu={updateActiveMenu} currentMenu={currentMenu}/>}
                {currentMenu===10&&<Wallpaper active={active} changeMenuForward={changeMenuForward} updateActiveMenu={updateActiveMenu} currentMenu={currentMenu}/>}
            </div>
        )
    }
}


export default Display;