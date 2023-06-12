import React from "react";
import './Home.css';

export default function Home() {
    return (
        <div>
            <div className="home-container">
                <div className="home-headshot">
                    <img src={process.env.PUBLIC_URL + '/images/home/circle-headshot.png'} alt={'circle-headshot'} width="256" height="256"/>
                </div>
                <div className="home-textfields">
                    <h1>Hello!</h1>
                    <p>I am Sam Foucart, a computer engineer from southeast Ohio. I am currently working at NICE CXone on the CXone recording platform.</p>
                    <p>This website is a home for my engineering blog and side projects. It was originally made to learn React, but I have been adding more too it as time goes on.
                        Although I'm not formally a frontend developer, this still shows a demonstration of my work.
                    </p>
                </div>
            </div>
            <img src={process.env.PUBLIC_URL + '/images/home/IMG_5120.jpeg'} style={{objectFit: 'scale-down', flexShrink: 1, width: '100%', height: '100%'}}/>
        </div>
    );
}
