import React from 'react';
import LandingSectionStyle from "./LandingSection.style";

function LandingSection(props) {
    return (
        <LandingSectionStyle className={"relative w-full min-h-screen p-28 primary-bg flex"}>
            <div className="heading w-2/3">
                <h1 className={"text-8xl mb-5 mt-8 font-bold"}>
                    Delicious Cake For <br/> Everyone
                </h1>
                <h2 className="text-4xl subtitle">Freshly baked Cakes and Cookies</h2>
                {/*<img className={"max-w-full max-h-64"} src="/images/cake4.svg" alt=""/>*/}
                <button className={"outline-0 text-white text-3xl font-bold px-10 py-2 bg-pink-500 rounded-full mt-5"}>Explore Menu</button>
            </div>
            <div className="image w-1/3">
                <img className={""} src="/images/cake2.jpg" alt=""/>
            </div>
        </LandingSectionStyle>
    );
}

export default LandingSection;