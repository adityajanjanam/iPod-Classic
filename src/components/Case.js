import React from 'react';
import "../css/Case.css"
import Wheel from './Wheel.js'
import Display from './Display.js'

// This component is the outer case of iPod it does nothing special just renders display and wheel component
class Case extends React.Component {
    componentDidMount() {
        if (typeof globalThis !== 'undefined') {
            globalThis.addEventListener('keydown', this.handleKeyPress);
        }
    }

    componentWillUnmount() {
        if (typeof globalThis !== 'undefined') {
            globalThis.removeEventListener('keydown', this.handleKeyPress);
        }
    }

    handleKeyPress = (event) => {
        const { updateActiveMenu, changeMenuBackward, changeMenuForward, currentMenu, togglePlayPause } = this.props;
        
        switch(event.key) {
            case 'ArrowUp':
                event.preventDefault();
                updateActiveMenu(0, currentMenu);
                break;
            case 'ArrowDown':
                event.preventDefault();
                updateActiveMenu(1, currentMenu);
                break;
            case 'Enter':
                event.preventDefault();
                changeMenuForward(this.props.active, currentMenu);
                break;
            case 'Escape':
                event.preventDefault();
                changeMenuBackward();
                break;
            case ' ':
                event.preventDefault();
                togglePlayPause();
                break;
            default:
                break;
        }
    }

    render() {
        const {active,updateActiveMenu, currentMenu, changeMenuBackward,changeMenuForward, menuItems, musicItems,togglePlayPause, songItems,playing, songIndex,theme, audio, songUrl, songImgUrl, seekSongForward, seekSongReverse, wheelColor ,wallpaper, wallpaperItems, noty, setNoty, notifyText} = this.props;
        return (
            <div className="case-container" tabIndex={-1}>
                <div style={{backgroundColor:theme}} className="case" role="application" aria-label="iPod Classic Music Player">
                    <Display songIndex={songIndex} playing={playing} active={active} musicItems={musicItems} menuItems={menuItems} currentMenu={currentMenu} songItems={songItems} audio={audio} songUrl={songUrl} songImgUrl={songImgUrl} wallpaper={wallpaper} wallpaperItems={wallpaperItems} noty={noty} setNoty={setNoty} notifyText={notifyText} changeMenuForward={changeMenuForward} updateActiveMenu={updateActiveMenu} togglePlayPause={togglePlayPause}/>
                    <Wheel theme={theme} active={active} menuItems={menuItems} currentMenu={currentMenu} changeMenuForward={changeMenuForward} changeMenuBackward={changeMenuBackward} updateActiveMenu={updateActiveMenu} togglePlayPause={togglePlayPause} seekSongForward={seekSongForward} seekSongReverse={seekSongReverse} wheelColor={wheelColor}/>
                </div>
            </div>
        )
    }
}

export default Case;