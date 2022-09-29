import React from "react";
import {
    RiDashboardFill,
    RiProfileLine,
    RiImageLine,
    RiSafariLine,
    RiSettings2Line,
    RiContactsLine,
    RiAliensLine,
    RiMistLine,
    RiMentalHealthLine,
    RiLogoutBoxRLine,
} from "react-icons/ri";

const Sidebar = () => {
    return (
        <div className="bg-gray-800 w-48 text-white p-2 font-body h-full min-h-screen flex flex-col">
            <ul className="mt-5">
                <li className="flex items-center p-2 my-2 cursor-pointer hover:bg-gray-700">
                    <RiDashboardFill size={25} />
                    <p className="ml-4 ">Dashboard</p>
                </li>
                <li className="flex items-center p-2 my-2 cursor-pointer hover:bg-gray-700">
                    <RiMentalHealthLine size={25} />
                    <p className="ml-4 ">Analytics</p>
                </li>
                <li className="flex items-center p-2 my-2 cursor-pointer hover:bg-gray-700">
                    <RiMistLine size={25} />
                    <p className="ml-4 ">Status</p>
                </li>
                <li className="flex items-center p-2 my-2 cursor-pointer hover:bg-gray-700">
                    <RiProfileLine size={25} />
                    <p className="ml-4 ">Depth Data</p>
                </li>
                <li className="flex items-center p-2 my-2 cursor-pointer hover:bg-gray-700">
                    <RiSettings2Line size={25} />
                    <p className="ml-4 ">Configures</p>
                </li>
            </ul>

            <h5 className="text-xs text-gray-500 my-8">PERSONNEL SECTION</h5>

            <ul>
                <li className="flex items-center p-2 my-2 cursor-pointer hover:bg-gray-700">
                    <RiContactsLine size={25} />
                    <p className="ml-4 ">Profile</p>
                </li>
                <li className="flex items-center p-2 my-2 cursor-pointer hover:bg-gray-700">
                    <RiImageLine size={25} />
                    <p className="ml-4 ">Images</p>
                </li>
                <li className="flex items-center p-2 my-2 cursor-pointer hover:bg-gray-700">
                    <RiAliensLine size={25} />
                    <p className="ml-4 ">Users</p>
                </li>
                <li className="flex items-center p-2 my-2 cursor-pointer hover:bg-gray-700">
                    <RiSafariLine size={25} />
                    <p className="ml-4 ">History</p>
                </li>
                <li className="flex items-center p-2 my-2 cursor-pointer hover:bg-gray-700">
                    <RiProfileLine size={25} />
                    <p className="ml-4 ">Adance Settings</p>
                </li>
            </ul>

            <ul className="h-full flex">
                <li className="flex items-center p-2 my-10 self-end cursor-pointer hover:bg-gray-700 w-full">
                    <RiLogoutBoxRLine size={25} />
                    <p className="ml-4 ">Logout</p>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
