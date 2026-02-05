import { useState, useEffect } from 'react';
import "./AboutMe.css"




export default function AboutMe() {


  return (
    <section id="about">
      <div className='wrapper-about'>
        <div className='inner-wrapper-about'>
          <p className='about-me'>About Me</p>
          <hr className="neon-line"></hr>
          <p className='about-me-text'>
            Results-driven Software Engineer with over 5+ years of experience in full-stack web development. Proven ability to design and deliver scalable, high-performance applications while collaborating effectively with cross-functional teams to achieve project goals and deliver quality solutions. Focused on leveraging AI-driven insights to optimize system performance and deliver smarter, more adaptive digital solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
