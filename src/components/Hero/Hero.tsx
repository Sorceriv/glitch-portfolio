import HeaderImage from "../../assets/eddztest.gif";
import  './Hero.scss'

function Hero() {
    return (
        <>
            <div id="hero" className="hero-section">
                <div className="header-section-1">
                    <div className="header-title">
                        Hi! My name is...
                        <div className="header-title-name">
                            {/* <span style={{'--index': '0'}}>Eduardo Villanueva</span>
                            <span style={{'--index': '1'}}>Eduardo Villanueva</span>
                            <span style={{'--index': '2'}}>Eduardo Villanueva</span> */}
                        </div>
                        
                    </div>
                    <div className="header-text">
                        I am a result-driven hardworker IT professional who specializes in Software Engineering and Data Analytics.
                        As someone who dedicates himself to accomplishing objectives, you can place your confidence in my craft.
                    </div>
                    <a href="#contact" className="hero-button">Contact Me!</a>
                </div>
                <div className="header-section-2">
                    <img className="header-image" src={HeaderImage} alt="loading..." />
                </div>
            </div>
        </>
    )
}

export default Hero;