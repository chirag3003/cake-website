import React from 'react';

function Navbar() {
    return (
        <nav className="fixed top-0 w-full flex px-10 py-4 lg:px-20 lg:py-6 z-10 ">
            <div className="title"><h1 className={"text-3xl font-bold"}>CakesNCookies</h1></div>
        </nav>
    );
}

export default Navbar;