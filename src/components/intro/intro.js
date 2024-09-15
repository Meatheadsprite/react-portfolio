import React from "react";
import './intro.css';
import { Link } from 'react-scroll';
import bg from '../../assets/tpn.png'

const Intro = () => {
    return(
        <section id="intro">
            <div className="introContent">
                <div className="introMsg">
                    <span className="hello">Hello</span>
                    <span className="greeting">My nameis <span className="myname">Christian</span><br />3rd Year<br />Computer Science Student</span>
                    <p className="introPara">Welcome to my Website!</p>
                    <Link
                    to="works"
                    smooth={true}
                    duration={500}>
                    <button className="parabtn">My projects</button></Link>
                </div>

            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    )
}

export default Intro;
