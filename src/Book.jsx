// EXTERNAL
import HTMLFlipBook from "react-pageflip";

// ASSETS
import Arrow from "./assets/Arrow.png";
import Sticker from "./assets/Sticker.svg";

// ILLUSTRATIONS
import Yae from "./illustrations/2022.5.10 - yae miko.jpg";
import Yae2 from "./illustrations/2023.1.9 - yae miko.png";
import Gojo from "./illustrations/2023.12.3 - gojo.png";
import Frieren from "./illustrations/2024.4.16 - frieren.png";
import Gojo2 from "./illustrations/2024.5.27 - gojo.png";
import Reze from "./illustrations/2024.6.13 - reze.png";
import StreetLight from "./illustrations/2024.6.14 - street light.png";
import Gojo3 from "./illustrations/2024.7.11 - gojo.png";
import Makima from "./illustrations/2024.7.18 - makima.png";
import Dokja from "./illustrations/2024.7.29 - dokja.png";
import Mostima from "./illustrations/2024.8.19 - mostima.png";
import LookBack from "./illustrations/2024.10.11 - look back.png";
import HuTao from "./illustrations/2024.10.17 - hu tao.png";
import Arturia from "./illustrations/2024.10.28 - arturia.png";
import Reflection from "./illustrations/2024.11.14 - reflection.png";
import Dusk from "./illustrations/2024.12.30 - dusk.png";
import Frieren2 from "./illustrations/2024.11.26 - frieren.png";
import Lake from "./illustrations/2025.2.3 - lake.png";
import Inori from "./illustrations/2025.2.21 - inori.png";
import Miku from "./illustrations/2025.3.12 - miku.png";
import Ocean from "./illustrations/2025.3.16 - ocean.png";
import Coffin from "./illustrations/2025.4.28 - andy and leyley.png";
import Exusiai from "./illustrations/2025.5.17 - exusiai.png";
import Mostima2 from "./illustrations/2025.5.28 - mostima.png";
import Carlotta from "./illustrations/2025.6.10 - carlotta.png";
import Shu from "./illustrations/2025.7.13 - shu.png";
import Makise from "./illustrations/2025.7.23 - makise.png";
import Makise2 from "./illustrations/2025.8.21 - makise.png";
import Miku2 from "./illustrations/2025.8.4 - miku.png";
import Reze2 from "./illustrations/2025.9.28 - reze.png";
import Exusiai2 from "./illustrations/2025.10.26 - exusiai.png";
import Frieren3 from "./illustrations/2025.11.18 - frieren.png";
import Carlotta2 from "./illustrations/2025.12.23 - carlotta.png";
import Misa from "./illustrations/2026.1.21 - misa.png";
import Mostima3 from "./illustrations/2026.1.29 - mostima.jpg";

// CSS
import "./Book.css";
import "./Illustrations.css";

export default function Book() {
    return (
        <HTMLFlipBook 
            width={500}
            height={600}
            autoSize={false}
            usePortrait={false}
            showCover={true}
            maxShadowOpacity={0.6}
            flippingTime={750}
            swipeDistance={0} 
        >
            <div className="cover">
                <div className="cover-content">
                    <div className="book-binder"/>
                    <img className="cover-sticker" src={Sticker}/>
                </div>
            </div>
            
            <div className="page">
                <div className="page-content">
                    <img className="yae" src={Yae}/>
                </div>
            </div>

            <div className="page">
                <div className="page-content-end">
                    <img src={Yae2}/>
                </div>
            </div>

            <div className="page">
                <div className="page-content">
                    <img src={Gojo}/>
                </div>
            </div>

            <div className="page">
                <div className="page-content">
                    <img src={Frieren}/>
                </div>
            </div>

            <div className="page-gojo2">
                <div className="page-content-gojo">
                    <img src={Gojo2}/>
                </div>
            </div>
            <div className="page-gojo2">
                <div className="page-content-gojo2">
                    <img src={Gojo2}/>
                </div>
            </div>

            <div className="page-reze">
                <div className="page-content-start">
                    <img src={Reze}/>
                </div>
            </div>

            <div className="page-street">
                <div className="page-content">
                    <img src={StreetLight}/>
                </div>
            </div>

            <div className="page-gojo3">
                <div className="page-content-end">
                    <img src={Gojo3}/>
                </div>
            </div>

            <div className="page-makima">
                <div className="page-content">
                    <img src={Makima}/>
                </div>
            </div>

            <div className="page-dokja">
                <div className="page-content-dokja">
                    <img src={Dokja}/>
                </div>
            </div>
            <div className="page-dokja">
                <div className="page-content-dokja2">
                    <img src={Dokja}/>
                </div>
            </div>

            <div className="page-mostima">
                <div className="page-content-end">
                    <img src={Mostima}/>
                </div>
            </div>

            <div className="page-look-back">
                <div className="page-content">
                    <img src={LookBack}/>
                </div>
            </div>

            <div className="page-hu-tao">
                <div className="page-content">
                    <img src={HuTao}/>
                </div>
            </div>

            <div className="page-arturia">
                <div className="page-content-end">
                    <img src={Arturia}/>
                </div>
            </div>

            <div className="page">
                <div className="page-content-start">
                    <img src={Reflection}/>
                </div>
            </div>

            <div className="page">
                <div className="page-content">
                    <img src={Dusk}/>
                </div>
            </div>

            <div className="page-frieren2">
                <div className="page-content-frieren">
                    <img src={Frieren2}/>
                </div>
            </div>
            <div className="page-frieren2">
                <div className="page-content-frieren2">
                    <img src={Frieren2}/>
                </div>
            </div>

            <div className="page-lake">
                <div className="page-content-lake">
                    <img src={Lake}/>
                </div>
            </div>
            <div className="page-lake">
                <div className="page-content-lake2">
                    <img src={Lake}/>
                </div>
            </div>

            <div className="page-inori">
                <div className="page-content-inori">
                    <img src={Inori}/>
                </div>
            </div>
            <div className="page-inori">
                <div className="page-content-inori2">
                    <img src={Inori}/>
                </div>
            </div>

            <div className="page-miku">
                <div className="page-content-miku">
                    <img src={Miku}/>
                </div>
            </div>
            <div className="page-miku">
                <div className="page-content-miku2">
                    <img src={Miku}/>
                </div>
            </div>

            <div className="page">
                <div className="page-content-start">
                    <img src={Ocean}/>
                </div>
            </div>

            <div className="page">
                <div className="page-content">
                    <img src={Coffin}/>
                </div>
            </div>

            <div className="page">
                <div className="page-content">
                    <img src={Exusiai}/>
                </div>
            </div>

            <div className="page-mostima2">
                <div className="page-content-start">
                    <img src={Mostima2}/>
                </div>
            </div>

            <div className="page">
                <div className="page-content">
                    <img src={Carlotta}/>
                </div>
            </div>

            <div className="page-shu">
                <div className="page-content">
                    <img src={Shu}/>
                </div>
            </div>

            <div className="page">
                <div className="page-content">
                    <img src={Makise}/>
                </div>
            </div>

            <div className="page">
                <div className="page-content">
                    <img src={Makise2}/>
                </div>
            </div>

            <div className="page-miku2">
                <div className="page-content">
                    <img src={Miku2}/>
                </div>
            </div>

            <div className="page">
                <div className="page-content">
                    <img src={Reze2}/>
                </div>
            </div>

            <div className="page">
                <div className="page-content">
                    <img src={Exusiai2}/>
                </div>
            </div>

            <div className="page">
                <div className="page-content-end">
                    <img src={Frieren3}/>
                </div>
            </div>

            <div className="page-carlotta">
                <div className="page-content">
                    <img src={Carlotta2}/>
                </div>
            </div>

            <div className="page-misa">
                <div className="page-content-end">
                    <img src={Misa}/>
                </div>
            </div>

            <div className="page">
                <div className="page-content">
                    <img src={Mostima3}/>
                </div>
            </div>

            <div className="blank">
                <div className="blank-content">
                    <img className="arrow" src={Arrow}/>
                </div>
            </div>

            <div className="back">
                <div className="back-content">
                    <img className="back-sticker" src={Sticker}/>
                    <div className="book-binder"/>
                </div>
            </div>
        </HTMLFlipBook>
    );
}
