import React from 'react'
import "./HomeLastSection.css"
import bottomHoneyLeft from "../../../Assets/Images/home bottom left honey.png"
import bottomHoneyRight from "../../../Assets/Images/home bottom right honey.png"
import { useNavigate } from 'react-router-dom'


export function HomeLastSection() {
    const navigate = useNavigate()
    return (
        <div id='home-last-section'>
            <div id='home-last-section-head'>
                <h1>Our Product</h1>
                <a href="#home">See all</a>
            </div>
            <div id='home-last-section-inside'>
                <div id='home-last-section-inside-left'>
                    <div>
                        <h3>Eucalyptus Honey</h3>
                        <p>It has the scent of lavender, medium sweetness
                            lavender scented, and has a medium amber color.</p>
                        <button
                            onClick={() => {
                                navigate("/products")
                            }}
                        >Buy Now</button>
                    </div>
                    <figure>
                        <img src={bottomHoneyLeft} alt="" />
                    </figure>
                </div>
                <div id='home-last-section-inside-left'>
                    <div>
                        <h3>Basswood Honey</h3>
                        <p>Basswood is a tree native and abundant in Wisconsin, which is also known as the Linden tree.</p>
                        <button
                            onClick={() => {
                                navigate("/products")
                            }}
                        >Buy Now</button>
                    </div>
                    <figure>
                        <img src={bottomHoneyRight} alt="" />
                    </figure>
                </div>
            </div>
        </div>
    )
}
