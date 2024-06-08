import React from 'react'

export default function VideoTag({src}) {

    return (
        <div className="flex justify-center items-center w-full h-full bg-transparent">
            <video className="w-full max-w-2xl" controls>
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}
