// REACT
import { useEffect, useState } from "react";

// COMPONENTS
import Book from "./Book.jsx";

// ASSETS
import Moon from "./assets/Moon.svg";
import Profile from "./assets/Profile.png";
import Sun from "./assets/Sun.svg";

// CSS
import "./App.css";

function App() {
    const [lightMode, setLightMode] = useState(true);
    
    useEffect(() => {
        const backgroundColour = lightMode ? "#AABFE5" : "#3D495E";
        const textColour = lightMode ? "black" : "white";

        document.body.style.backgroundColor = backgroundColour;
        document.body.style.color = textColour;

        const element = document.querySelector('.main-page h1 a');
        if (element) {
            element.style.color = textColour;
        }
    }, [lightMode]);

    const handleSiteMode = () => {
        setLightMode(prev => !prev);
    }

    return (
        <div className="main-page">
            <div className="header">
                <div className="profile">
                    <div className="profile-picture">
                        <img src={Profile}/>
                    </div>
                    <h2>cacaw</h2>
                </div>

                <div className="site-mode" onClick={handleSiteMode}>
                    <img src={lightMode ? Moon : Sun}/>
                </div>
            </div>

            <h1>
                <a href="https://x.com/cacawtus">@cacawtus</a>
            </h1>
            <div className="artbook">
                <Book/>
            </div>
            
        </div>
    )
}

export default App
