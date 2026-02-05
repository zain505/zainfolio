import { useState, useEffect, useRef } from 'react';
import "./Projects.css"

import { Canvas } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import ProjectorScene from "./3dWork"

import Git from "../../assets/git.png"


export default function Projects() {
    const title = "PROJECTS"
    const colors = [
        '#ff009d',
        '#00e5ff',
        '#39ff14',
        '#b300ff',
        '#ff6a00',
        '#faff00',
        '#00fff7',
        '#ff073a',]



    const Projects = [
        {
            title: "EasTrade Web Terminal",
            description: ["Built and deployed Capizar® EasyTrade, a real-time trading web application from scratch using React.js, Lightstreamer, Redux, and Kendo UI.", "Designed and implemented real-time data streaming and state management solutions to handle high-frequency trading operations.", "Integrated modular and scalable architecture, ensuring cross-browser compatibility and optimal performance.", "Successfully deployed and currently maintain the platform across multiple African capital markets, including the Ghana, Malawi, Zimbabwe, Senegal, Ethiopia and Angola Stock Exchanges."],
            techstack: [{ t: "React", c: "#61DAFB" }, { t: "Redux", c: "#764ABC" }, { t: "Lightstreamer", c: "#1A1A1A" }, { t: "KendoUI", c: "#ff6358" }],
            githubUrl: "https://github.com/zain505",

        },
        {
            title: "Market Surveillance System",
            description: ["Designed and developed the Market Surveillance System (MSS) from scratch using React.js, Node.js, Kendo UI, Google Charts, and Web Sockets, ensuring high performance and scalability", "Built a real-time surveillance platform for capital market monitoring, enabling stock exchange administrators and executives to detect irregular trading patterns and maintain regulatory compliance.", "Integrated interactive data visualizations and dashboards using Google Charts and Kendo UI to provide actionable insights for market surveillance.", "Integrated interactive data visualizations and dashboards using Google Charts and Kendo UI to provide actionable insights for market surveillance"],
            techstack: [{ t: "React", c: "#61DAFB" }, { t: "Redux", c: "#764ABC" }, { t: "Nodejs", c: "#339933" }, { t: "SocketIO", c: "#24C29F" }, { t: "MongoDB", c: "#47A248" }, { t: "Express.js", c: "#2C2C2C" }, { t: "Google Charts", c: "#4285F4" }, { t: "MySql", c: "#00758F" }],
            githubUrl: "https://github.com/zain505",

        },
        {
            title: "Informer",
            description: ["Designed and developed a Node.js server to act as a real-time informer, integrating Apache Kafka and Socket.IO for high-throughput, low-latency live feed distribution.", "Engineered seamless integration between a C++ feed-generating component and the Node.js informer server, enabling smooth ingestion and broadcasting of market data.",
                "Optimized event streaming pipelines to handle large volumes of concurrent connections, maintaining performance and stability across multiple platforms."],
            techstack: [],
            githubUrl: "https://github.com/zain505",

        },
        {
            title: "Truck Dispatch",
            description: [
                "Design and develop a modern, responsive website for a Truck Dispatch company.",
                "Create clean Home, About, Services, Vehicles, and Contact pages.",
                "Showcase company information, dispatch services, and fleet details in an engaging layout.",
                "Implement interactive UI sections using React and KendoUI components.",
                "Ensure mobile-first design with smooth navigation and polished visuals.",
                "Integrate contact forms and call-to-action sections for customer inquiries.",
            ],
            techstack: [{ t: "React", c: "#61DAFB" }, { t: "Redux", c: "#764ABC" }],
            githubUrl: "https://github.com/zain505",

        },
        {
            title: "Rehab With Kiran",
            description: [
                "Design and develop a clean, responsive website for a professional physiotherapist.",
                "Create dedicated sections for Home, About the Doctor, Treatments, Clinic Services, and Contact.",
                "Showcase the doctor’s expertise, qualifications, and patient success stories.",
                "Implement a user-friendly layout with React and KendoUI for smooth navigation.",
                "Ensure mobile-first design for patients accessing the site on phones and tablets.",
                "Integrate an appointment/contact form to make booking easy for patients."
            ],
            techstack: [{ t: "React", c: "#61DAFB" }, { t: "Redux", c: "#764ABC" }],
            githubUrl: "https://github.com/zain505",

        },
        {
            title: "Aswaaq Anwaar",
            description: [
                "Designed and developed a full-featured e-commerce platform from scratch using the MERN stack, ensuring scalability, performance, and a seamless user experience.",
                "Implemented core functionalities including product catalog, shopping cart, order management, and secure authentication/payment workflows to support end-to-end online transactions.",
                "Optimized application performance with efficient API design, database indexing, and responsive UI, resulting in improved load times and cross-device compatibility"
            ],
            techstack: [{ t: "React", c: "#61DAFB" }, { t: "Redux", c: "#764ABC" }],
            githubUrl: "https://github.com/zain505",
        },
        {
            title: "Laboon",
            description: [
                "Designed and developed a full-featured e-commerce platform from scratch using the MERN stack, ensuring scalability, performance, and a seamless user experience.",
                "Implemented core functionalities including product catalog, shopping cart, order management, and secure authentication/payment workflows to support end-to-end online transactions.",
                "Optimized application performance with efficient API design, database indexing, and responsive UI, resulting in improved load times and cross-device compatibility"
            ],
            techstack: [{ t: "React", c: "#61DAFB" }, { t: "Redux", c: "#764ABC" }],
            githubUrl: "https://github.com/zain505",
        },
        {
            title: "ERP Green",
            description: [
                "Designed and developed a full-featured e-commerce platform from scratch using the MERN stack, ensuring scalability, performance, and a seamless user experience.",
                "Implemented core functionalities including product catalog, shopping cart, order management, and secure authentication/payment workflows to support end-to-end online transactions.",
                "Optimized application performance with efficient API design, database indexing, and responsive UI, resulting in improved load times and cross-device compatibility"
            ],
            techstack: [{ t: "React", c: "#61DAFB" }, { t: "Redux", c: "#764ABC" }],
            githubUrl: "https://github.com/zain505",
        },
        
    ]

    return (
        <section id="projects">
            <div className='project-wrapper'>
                <div className='project-wrapper-inner'>
                    <div className='title-area'>
                        <div className='title-tile-grid'>
                            {[...title]?.map(t => (<div style={{
                                // backgroundColor:colors[Math.floor(Math.random() * colors.length)],
                                boxShadow: `0 0 15px rgba(255,255,255,0.4),
              0 0 25px ${colors[Math.floor(Math.random() * colors.length)]}`
                            }}>
                                <p style={{ margin: 0 }}>{t}</p>
                            </div>))}

                        </div>

                    </div>
                    <p className='think-design-develop'>think. design. develop..!</p>
                    <ProjectorScene />
                    <div className='content-project'>

                        {Projects.map(p => (
                            <div className='card-wrapper-project' style={{
                                boxShadow: `0 0 15px rgba(255,255,255,0.4),
              0 0 25px ${colors[Math.floor(Math.random() * colors.length)]}`
                            }}>
                                <div className='card-inner-overlap-project'>
                                    <div className='project-card-title'>
                                        <p className='proj-card-t'>{p.title}</p>
                                        <hr style={{ backgroundColor: `${colors[Math.floor(Math.random() * colors.length)]}` }} className='project-card-title-line' />
                                    </div>
                                    <ul className='project-description'>
                                        {p?.description.map(d => (
                                            <li>{d}</li>
                                        ))}
                                    </ul>
                                    <ul className='project-tech-stack'>
                                        {p?.techstack.map(ts => (
                                            <li style={{ backgroundColor: `${ts.c}` }}>{ts.t}</li>
                                        ))}
                                    </ul>
                                    <a href="https://github.com/zain505" target='_blank' className='github-url' >
                                        <img src={Git} height={"20px"} width={"20px"} style={{ marginRight: "5px" }} />
                                        Github</a>
                                </div>
                                <div className='corner'></div>

                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
}


