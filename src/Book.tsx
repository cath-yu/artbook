// REACT
import { useState, useEffect } from "react";

// EXTERNAL
import HTMLFlipBook from "react-pageflip";

// ASSETS
import Arrow from "./assets/Arrow.png";
import Sticker from "./assets/Sticker.svg";

// CSS
import "./Book.css";

export default function Book() {
    return (
        <HTMLFlipBook 
            width={500}
            height={600}
            size={"fixed"}
            autoSize={false}
            usePortrait={false}
            startPage={0}
            showCover={true}
            drawShadow={true}
            maxShadowOpacity={0.6}
            flippingTime={750}
            mobileScrollSupport={true}
            clickEventForward={true} 
            useMouseEvents={true} 
            swipeDistance={0} 
            showPageCorners={true} 
            disableFlipByClick={false}
        >
            <div className="cover">
                <div className="cover-content">
                    <div className="book-binder"/>
                    <img className="cover-sticker" src={Sticker}/>
                </div>
            </div>
            
            <div className="temp">
            </div>

            <div className="temp">
            </div>

            <div className="temp">
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
