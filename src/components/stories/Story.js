import React from "react";

export default function Story({ Avatar, src, name }) {
    return (
        <div className="flex flex-col items-center cursor-pointer">
            <div className="story-card border-2 border-red-400 rounded-full mb-1">
                <Avatar src={src} alt="Profile Avatar" />
            </div>
            <p className="text-xs text-center">{name.split(" ")[0]}</p>
        </div>
    );
}
