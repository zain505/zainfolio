import { useState, useEffect } from 'react';
import "./Hero.css"
import NeuraNetwork from '../../3d/NeuraNetwork';
import MenuBar from "../MenuBar/MenuBar"
import Arrow from "../../assets/arrow.png"


export default function Hero() {

const scrollToAbout = (sec) => {
        const section = document.getElementById(sec);
        section?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div className='hero-wrapper'>
            <div className='upper-layout'>
                <div className='content-wrapper'>
                    <div className='menu'>
                        <MenuBar />
                    </div>
                    <div className='inner'>
                        <div className='line'></div> 
                        <div>
                            <p className='hello'>Hello, My name is</p>
                            <p className='tech'>Zain Ur Rehman</p>
                            {/* <p className='passion'>Full Stack Developer</p> */}

                        </div>
                    </div>
                    <div className='scroll' onClick={()=>scrollToAbout("about")}>
                        <img src={Arrow} height="100%" />
                    </div>
                </div>
            </div>
            <NeuraNetwork />
        </div>
    );
}
