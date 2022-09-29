import React from "react";

const Decoding = () => {
    const [data, setData] = React.useState();
    const [count, setCount] = React.useState(0);
    const fetchDecoding = async () => {
        const res = await fetch(`http://localhost:5000/data3`);
        const data = await res.json();
        setData(data);
    };
    React.useEffect(() => {
        fetchDecoding();

        const interval = setInterval(() => {
            setCount(count + 1);
            if (count + 1 > 2) {
                setCount(0);
            }
        }, 2000);
        return () => clearInterval(interval);
    }, [count]);
    return (
        <div className="mt-4 rounded-md bg-gray-800 w-full flex flex-col h-72 ">
            <h1 className="text-white font-body  mt-3 text-sm border-b-2 border-gray-400 mx-3">
                Decoding Status
            </h1>
            <div className="DecodeingInfo flex m-2 gap-5 mt-3">
                <div className="h-48 w-1/2 bg-gray-800 flex justify-center">
                    <img
                        src={data && data[count].src}
                        className="object-fill"
                    />
                </div>
                <div className="h-48 w-1/2 bg-white">
                    <p>{data && data[count].msg}</p>
                </div>
            </div>
        </div>
    );
};

export default Decoding;
