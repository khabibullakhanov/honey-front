import React from 'react'
import "./Footer.css"
import blackLogo from "../../Assets/Icons/black logo.svg"
import facebook from "../../Assets/Icons/facebook.svg"
import twitter from "../../Assets/Icons/twitter.svg"
import google from "../../Assets/Icons/google.svg"
import pinterest from "../../Assets/Icons/pinterest.svg"
import playMarket from "../../Assets/Icons/playmarket.svg"
import appstore from "../../Assets/Icons/appstore.svg"

export function Footer() {
    return (
        <div id="footer-main-container">
            <div id='footer-main-container-first-section'>
                <figure>
                    <img src={blackLogo} alt="" />
                </figure>
                <p>Honey is one of the prime ingredients in your everyday food schedule. </p>
            </div>
            <div id='footer-logos-container'>
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={google} alt="" />
                <img src={pinterest} alt="" />
            </div>
            <div id='footer-social-container'>
                <img src={playMarket} alt="" />
                <img src={appstore} alt="" />
            </div>
        </div>
    )
}
