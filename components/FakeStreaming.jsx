import React, { useEffect, useState } from "react";

const FakeStreaming = () => {
    const [images, setImages] = useState();
    const [num, setNum] = useState(5);

    useEffect(() => {
        const fetchImages = async () => {
            const res = await fetch(`http://localhost:5000/images`);
            const images = await res.json();
            setImages(images);
        };
        try {
            fetchImages();
        } catch (error) {
            console.error(error);
        }
        // setInterval(() => fetchImages(), 1000);
    }, []);

    return (
        <>{images && <img className="w-full, h-72" src={images[num].src} />}</>
    );
};
// https://images.unsplash.com/photo-1663565197860-eee65f0b3f3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fEJuLURqcmNCcndvfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60
//https://images.unsplash.com/photo-1663515994080-e0615f6a047c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfEJuLURqcmNCcndvfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60
export default FakeStreaming;
