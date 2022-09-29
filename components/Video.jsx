import React from "react";

const Video = () => {
    return (
        // {/* original wid = 560, height=315 */}
        <iframe
            width="360"
            height="315"
            src="https://www.youtube.com/embed/EA-6o1_vrsA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="m-5"
        ></iframe>
    );
};

export default Video;
