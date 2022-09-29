import React from "react";
import { ImStatsBars, ImBell } from "react-icons/im";

const Header = () => {
    return (
        <header className="h-16 bg-gray-800 w-full flex justify-between items-center px-10">
            <h1 className="text-white font-semibold text-xl ">
                Teledyne FLIR IIS
            </h1>
            <input
                type="text"
                placeholder="Search"
                className="p-1 rounded-md px-4 bg-gray-900 text-white"
            ></input>

            <div className="flex gap-4 text-white">
                <ImBell size={25} />
                <ImStatsBars size={25} />
                <img
                    class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                ></img>
            </div>
        </header>
    );
};

export default Header;
