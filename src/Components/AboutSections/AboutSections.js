import React from 'react'
import "./AboutSections.css"
import firstImage from "../../Assets/Images/about intro left.jpg"
import secondImage from "../../Assets/Images/about center right image.jpg"
import thirdImage from "../../Assets/Images/about center left image.jpg"
import fourthImage from "../../Assets/Images/about bottom image.jpg"

export function AboutSections() {
    const aboutSection = [
        {
            id: 0,
            img: firstImage,
            clasname: "about-juft-divs",
        },
        {
            id: 1,
            img: secondImage,
            clasname: "about-problems",
        },
        {
            id: 2,
            img: thirdImage,
            clasname: "about-juft-divs",
        },
        {
            id: 3,
            img: fourthImage,
            clasname: "about-problems",
        },
    ];
    return (
        <div id="about-sec1">
            {aboutSection.map((item) => {
                return (
                    <div className="about-sec1-card" key={item.id} id={item.clasname}>
                        <figure className="about-card-img">
                            <img src={item.img} alt="" />
                        </figure>

                        <div className="about-texts">
                            <p>What is Lorem Ipsum?</p>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into
                                electronic typesetting, remaining essentially unchanged. It was
                                popularised in the 1960s with the release of Letraset sheets
                                containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker includin g versions of
                                Lorem Ipsum.
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}
