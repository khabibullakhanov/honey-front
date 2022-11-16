import React from 'react'
import { AboutSections } from '../../Components/AboutSections/AboutSections'
import "./About.css"
import aboutIntroImage from "../../Assets/Images/Intro.png"


export function About() {
    return (
        <div id='about-main-container'>
            <div id='about-main-header'>
            </div>
            <div id='about-intro-part'>
                <figure>
                    <img src={aboutIntroImage} alt="" />
                </figure>
            </div>
            <AboutSections />
            {/* <OurProducts/> */}
        </div>
    )
}
