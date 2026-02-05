import { useState, useEffect } from 'react';
import "./MenuBar.css"


export default function Hero() {
    const staticMessage = "hello"
    const openMyWhatsApp = () => {
        window.open(`https://api.whatsapp.com/send?phone=+923074029959&text=${staticMessage}`, "_blank");
    }

    const scrollToAbout = (sec) => {
        const section = document.getElementById(sec);
        section?.scrollIntoView({ behavior: "smooth" });
    };

    return (

        <nav className='wrapper'>
            <a href="#home" onClick={()=>scrollToAbout("home")}>Home</a>
            <a href="#aboutme" onClick={()=>scrollToAbout("about")}>About Me</a>
            <a href="#skills" onClick={()=>scrollToAbout("home")}>Skills</a>
            <a href="#projects" onClick={()=>scrollToAbout("home")}>Projects</a>
            <a href="#education" onClick={()=>scrollToAbout("home")}>Education</a>
            <a href="#contact" onClick={openMyWhatsApp} className="right">
                Contact
            </a>
        </nav>





    );
}
