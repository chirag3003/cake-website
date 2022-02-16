import React from 'react';
import LandingSectionStyle from "./LandingSection.style";

function LandingSection(props) {
    return (
        <LandingSectionStyle className={"relative w-full min-h-screen lg:p-28 p-16 primary-bg flex flex-col lg:flex-row"}>
            <div className="heading lg:w-2/3">
                <h1 className={"lg:text-9xl text-5xl mb-5 mt-8 font-bold"}>
                    Delicious Cake For <br/> Everyone
                </h1>
                <h2 className="lg:text-5xl text-2xl subtitle">Freshly baked Cakes and Cookies</h2>
                {/*<img className={"max-w-full max-h-64"} src="/images/cake4.svg" alt=""/>*/}
                <button className={"outline-0 text-white text-3xl font-bold px-10 py-2 bg-pink-500 rounded-full mt-5"}>Explore Menu</button>
            </div>
            <div className="image w-1/6">
                <img className={""} src="/images/cake2.jpg" alt=""/>
            </div>
        </LandingSectionStyle>
    );
}

export default LandingSection;