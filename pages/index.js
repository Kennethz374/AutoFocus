import Head from "next/head";
import LineChart from "../components/LineChart";
import LineChart2 from "../components/LineChart2";
import LocalChart1 from "../components/LocalLineChart1";
import Scene from "../components/R3F/Scene";
import ALLInFocus from "../components/AllInFocus";
import OutofFocus from "../components/OutofFocus";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import Decoding from "../components/Decoding";

export default function Home() {
    const [isFocusing, setIsFocusing] = useState(true);

    return (
        <div className="bg-gray-900 h-full min-h-screen flex flex-col">
            <Head>
                <title>Hackathon Auto Focus </title>
                <meta
                    name="TDY Hackathon Project "
                    content="Generated by Kenneth Zhang"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* HEADER  */}
            <Header />

            <main className="flex ">
                <Sidebar />

                <section className="w-full h-full flex p-4 gap-4">
                    {/* left */}
                    <div className="w-5/12 flex flex-col">
                        {/* <Scene /> */}
                        {/* Line Chart */}
                        <div className=" w-full rounded-md bg-gray-800 mt-2">
                            {/* <LineChart /> */}
                        </div>
                        <div className=" w-full rounded-md bg-gray-800 mt-4">
                            {/* <LineChart2 /> */}
                        </div>

                        {isFocusing ? (
                            <button
                                className="bg-gray-800 self-center mt-4 p-2 rounded-md shadow-lg text-white hover:bg-gray-700"
                                onClick={() => setIsFocusing(false)}
                            >
                                Stop Focusing
                            </button>
                        ) : (
                            <button
                                className="bg-gray-800 self-center mt-4 p-2 rounded-md shadow-lg text-white hover:bg-gray-700"
                                onClick={() => setIsFocusing(true)}
                            >
                                Start Focusing
                            </button>
                        )}
                    </div>

                    {/* right */}
                    <div className="w-7/12">
                        <div className="flex flex-col ">
                            {/* top */}
                            <div className="bg-gray-800 rounded-md ">
                                <h1 className="text-white font-body  mt-3 text-sm border-b-2 border-gray-400 mx-3">
                                    Live Streaming Here...
                                </h1>
                                <div className="flex justify-center my-4">
                                    {isFocusing ? (
                                        <ALLInFocus />
                                    ) : (
                                        <OutofFocus />
                                    )}
                                </div>
                            </div>

                            {/* bottom */}
                            {/* <Decoding /> */}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
