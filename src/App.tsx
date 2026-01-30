import './App.css';

import Profile from "./assets/cacawtus.png"
import Moon from "./assets/Moon.svg"

function App() {
    return (
        <div className="main-page">
            <div className="header">
                <div className="profile">
                    <div className="profile-picture">
                        <img src={Profile}/>
                    </div>
                    <h2>cacaw</h2>
                </div>

                <div className="site-mode">
                    <img src={Moon}/>
                </div>
            </div>

            <h1>@cacawtus</h1>
        </div>
    )
}

export default App
