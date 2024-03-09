import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faStream, faShapes, faGripVertical, faComment, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <ul className="menu scroll-nav d-flex">
            <li>
                <a className="scroll-to" href="#home">
                    <span>Home</span> <FontAwesomeIcon icon={faHome} />
                </a>
            </li>
            <li>
                <a className="scroll-to" href="#about">
                    <span>About</span> <FontAwesomeIcon icon={faUser} />
                </a>
            </li>
            <li>
                <a className="scroll-to" href="#resume">
                    <span>Resume</span> <FontAwesomeIcon icon={faBriefcase} />
                </a>
            </li>
          
            <li>
                <a className="scroll-to" href="#skills">
                    <span>Skills</span> <FontAwesomeIcon icon={faShapes} />
                </a>
            </li>
            <li>
                <a className="scroll-to" href="#portfolio">
                    <span>Portfolios</span> <FontAwesomeIcon icon={faGripVertical} />
                </a>
            </li>
            <li>
                <a className="scroll-to" href="#testimonial">
                    <span>Testimonial</span> <FontAwesomeIcon icon={faComment} />
                </a>
            </li>
            <li>
                <a className="scroll-to" href="#contact">
                    <span>Contact</span> <FontAwesomeIcon icon={faEnvelope} />
                </a>
            </li>
        </ul>
    );
}

export default Navbar;
