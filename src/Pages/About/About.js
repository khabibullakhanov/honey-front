import React from 'react'
import { AboutSections } from '../../Components/AboutSections/AboutSections'
import "./About.css"
import aboutIntroImage from "../../Assets/Images/about header image.jpg"
import { OurProducts } from '../../Components/Our Products/OurProducts'


export function About() {
    return (
        <div id='about-main-container'>
            <div id='about-main-header'>
                <h1>Biz Xaqimizda</h1>
            </div>
            <div id='about-intro-part'>
                <h1 style={{fontSize:"70px", width:"60%"}}>Biz faqatgina tabiy maxsulotlarni tafsiya qilamiz</h1>
                <figure>
                    <img src={aboutIntroImage} alt="" />
                </figure>
            </div>
            <AboutSections />
            {/* <OurProducts/> */}
        </div>
    )
}
