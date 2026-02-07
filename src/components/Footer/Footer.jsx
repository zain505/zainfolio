import React from "react";
import "./Footer.css";

export default function Footer() {
     const staticMessage = "hello"
    const openMyWhatsApp = () => {
        window.open(`https://api.whatsapp.com/send?phone=+923074029959&text=${staticMessage}`, "_blank");
    }
    return (
        <footer className="siteFooter" aria-labelledby="footer-title">
            <div className="siteFooter__inner">
                <p className="siteFooter__kicker">Need help? Start</p>

                <h2 id="footer-title" className="siteFooter__title">
                    Let&apos;s start
                </h2>

                <div className="siteFooter__row">
                    <a className="siteFooter__link" href="mailto:zain.rehman155@gmail.com">
                        zain.rehman155@gmail.com
                    </a>

                    <a
                        href="#"
                        className="siteFooter__cta"
                        onClick={(e) => {
                            openMyWhatsApp();
                        }}
                    >
                        Hire Me!
                    </a>

                    <a className="siteFooter__phone" href="tel:+923074029959">
                        <span className="siteFooter__phoneIcon" aria-hidden="true">
                            {/* simple phone icon */}
                            <svg viewBox="0 0 24 24" width="18" height="18">
                                <path
                                    d="M6.6 10.8c1.6 3.1 3.6 5 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.7 3.9.7.6 0 1 .4 1 1V21c0 .6-.4 1-1 1C10.2 22 2 13.8 2 3c0-.6.4-1 1-1h3.7c.6 0 1 .4 1 1 0 1.4.2 2.7.7 3.9.1.4 0 .8-.3 1.1L6.6 10.8z"
                                    fill="currentColor"
                                />
                            </svg>
                        </span>
                        <span className="siteFooter__phoneText">+92-307-402-9959</span>
                    </a>
                </div>

                <div className="siteFooter__social" aria-label="Social links">


                    <a
                        className="siteFooter__socialLink"
                        href="https://www.youtube.com/@howtofrontend4852"
                        target="_blank"
                        aria-label="YouTube"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            width="14"
                            height="14"
                            aria-hidden="true"
                        >
                            <path
                                d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.5-5.8z"
                                fill="currentColor"
                            />
                            <path
                                d="M9.6 15.5V8.5l6.3 3.5-6.3 3.5z"
                                fill="#0b0b0c"
                            />
                        </svg>
                    </a>

                    <a className="siteFooter__socialLink" href="https://x.com/Zain279906?t=2yjG8VDm_IblM39IYWJDVQ&s=09" target="_blank" aria-label="Twitter / X">
                        𝕏
                    </a>
                    <a className="siteFooter__socialLink" href="https://www.linkedin.com/in/muhammad-zain-ur-rehman-55b679281/" target="_blank" aria-label="LinkedIn">
                        in
                    </a>
                </div>
            </div>
        </footer>
    );
}
