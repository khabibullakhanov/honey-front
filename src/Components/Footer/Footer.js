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
    const icons = [
        {
            id: 0,
            icon: facebook,
        },
        {
            id: 1,
            icon: twitter,
        },
        {
            id: 2,
            icon: pinterest,
        },
        {
            id: 3,
            icon: google,
        },
    ];

    const stores = [
        {
            id: 0,
            icon: playMarket,
        },
        {
            id: 1,
            icon: appstore,
        },
    ];

    return (
        <div id="footer">
            <div className="footer-about">
                <figure
                    className="footer-logo">
                    <img src={blackLogo} alt="" />
                </figure>
                <p>
                    Honey is one of the prime ingredients in your everyday food schedule.
                </p>
            </div>
            <div className="footer-icon-container">
                {icons.map((item) => {
                    return (
                        <figure key={item.id} className="footer-icons-figure">
                            <img src={item.icon} alt="" />
                        </figure>
                    );
                })}
            </div>
            <div className="footer-markets-container">
                {stores.map((item) => {
                    return (
                        <figure key={item.id} className="footer-markets-figure">
                            <img src={item.icon} alt="" />
                        </figure>
                    )
                })}
            </div>
        </div>
    );
}
