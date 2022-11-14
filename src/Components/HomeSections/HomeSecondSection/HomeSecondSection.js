import React from 'react'
import "./HomeSecondSection.css"
import logo1 from "../../../Assets/Icons/logo 1.svg"
import logo2 from "../../../Assets/Icons/logo 2.svg"
import logo3 from "../../../Assets/Icons/logo 3.svg"
import logo4 from "../../../Assets/Icons/logo 4.svg"


export function HomeSecondSection() {
    return (
        <div id='home-second-section'>
            <h1>Our Trusted Shops</h1>
            <div>
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
                <img src={logo3} alt="" />
                <img src={logo4} alt="" />
            </div>
        </div>
    )
}
