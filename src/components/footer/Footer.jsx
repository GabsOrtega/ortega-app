import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Ortega</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#services" className="footer__link">Services</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Portfolio</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/gabsortegz_/" className="footer__social-link" target="_blank">
                        <i class="bx bxl-instagram"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/gabsortega/" className="footer__social-link" target="_blank">
                        <i class="bx bxl-linkedin"></i>
                    </a>

                    <a href="https://github.com/GabsOrtega" className="footer__social-link" target="_blank">
                        <i class="bx bxl-github"></i>
                    </a>
                </div>

                <span className="footer__copy">&#169; Gabriel Ortega. All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer