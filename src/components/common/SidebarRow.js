import React from "react";

export default function SidebarRow({ Avatar, src, name }) {
    return (
        <div className="flex items-center gap-2 mb-4">
            <Avatar src={src} alt="Avatar" className="cursor-pointer" />
            <div>
                <a href="#" className="text-sm font-medium hover:underline">
                    {name}
                </a>
                <p className="text-xs tracking-wider text-gray-400">New user in Instagram</p>
            </div>
            <a className="text-blue-400 hover:text-blue-500 transition-colors duration-200 text-xs font-bold ml-3 tracking-wider" href="#">
                Follow
            </a>
        </div>
    );
}
