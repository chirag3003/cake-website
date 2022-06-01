import React from 'react';
import LandingSectionStyle from "./LandingSection.style";

function LandingSection(props) {
    return (
        <LandingSectionStyle className={"relative w-full  lg:p-28 p-16 primary-bg flex flex-col lg:flex-row"}>
            <div className="heading w-full lg:w-2/3 mt-32">
                <h1 className={"lg:text-9xl text-6xl  mb-5 mt-8 font-bold"}>
                    Designer Cakes<br/>  Delivered
                </h1>
                <h2 className="lg:text-7xl text-4xl subtitle font-medium space-x-2">To Your Doorstep</h2>
                {/*<img className={"max-w-full max-h-64"} src="/images/cake4.svg" alt=""/>*/}
                <button className={"outline-0 text-white text-4xl font-bold px-10 py-2 bg-pink-500 rounded-3xl mt-16 font-bold"}>Explore Menu</button>
            </div>
            <div className="image w-1/6 hidden lg:block">
                <img className={""} src="/images/cake2.jpg" alt=""/>
            </div>
        </LandingSectionStyle>
    );
}

export default LandingSection;