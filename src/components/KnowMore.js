import React from 'react';
import "../css/KnowMore.css"

// Renders themes menu
class KnowMore extends React.Component {
    constructor(){
        super();
        this.state={
            divOpen:false,
        }
    }

    openDiv=()=>{
        if(this.state.divOpen===true)
            this.setState({divOpen:false})
        else
            this.setState({divOpen:true})
    }
    render() {
        const {divOpen} = this.state;
        let cssProp;
        if(divOpen===false){
            cssProp ={top:"-700px"};
        }
        else{
            cssProp ={top:"0px"};
        }
        return (
            <div style={cssProp} className="information-container">
                <div className="info-div">
                    <div className="info-header">
                        <h2>📖 Controls & Info</h2>
                        <button className="close-btn" onClick={this.openDiv}>✕</button>
                    </div>
                    <div className="info-content">
                        <section className="info-section">
                            <h3>🎮 Controls & Navigation</h3>
                            <h4>Touch & Wheel:</h4>
                            <ul>
                                <li>Tap on menu items to select</li>
                                <li>Rotate track wheel to navigate</li>
                                <li>Click center button to enter menu</li>
                                <li>Click menu button to go back</li>
                            </ul>
                            <h4>Keyboard:</h4>
                            <ul>
                                <li>Arrow Up/Down: Navigate menu items</li>
                                <li>Enter: Select/Open menu</li>
                                <li>Escape: Go back to previous menu</li>
                                <li>Space: Play/Pause music</li>
                            </ul>
                            <h4>Music Playback:</h4>
                            <ul>
                                <li>Click play/pause to control music</li>
                                <li>Click forward/reverse to skip tracks (while playing)</li>
                                <li>Access Settings for theme, wheel color & wallpaper</li>
                            </ul>
                        </section>
                        <section className="info-section">
                            <h3>✨ Features</h3>
                            <ul>
                                <li>Modern iPod Classic design with smooth animations</li>
                                <li>Full music player with play/pause and skip controls</li>
                                <li>Now Playing menu with track information</li>
                                <li>Music library browser with song selection</li>
                                <li>Interactive games (Snake, Brick Breaker, Memory, Flappy Bird)</li>
                                <li>Customizable themes and wheel colors</li>
                                <li>Wallpaper selector</li>
                                <li>Keyboard and touch navigation support</li>
                                <li>Responsive design for mobile devices</li>
                            </ul>
                        </section>
                        <section className="info-section">
                            <h3>🔗 Links</h3>
                            <p><a href="https://adityajanjanam.com" target="_blank" rel="noopener noreferrer">Website</a></p>
                            <p><a href="https://github.com/adityajanjanam" target="_blank" rel="noopener noreferrer">GitHub</a></p>
                            <p><a href="https://linkedin.com/in/janjanamaditya" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                        </section>
                        <section className="info-section">
                            <h3>👤 Developer</h3>
                            <p><a href="https://adityajanjanam.com" target="_blank" rel="noopener noreferrer">Aditya Janjanam</a></p>
                            <p><strong>Credits:</strong> Apple, Flaticon</p>
                        </section>
                    </div>
                </div>
                <button id="info-btn" onClick={this.openDiv}>📖 Know More</button>
            </div>
        )
    }

}


export default KnowMore;
