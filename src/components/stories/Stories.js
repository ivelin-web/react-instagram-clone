import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import { useEffect } from "react";
import Story from "./Story";

const stories = [
    {
        id: 1,
        src: "https://randomuser.me/api/portraits/men/97.jpg",
        name: "Veeti Seppanen",
    },
    {
        id: 2,
        src: "https://uifaces.co/our-content/donated/gPZwCbdS.jpg",
        name: "Andreas Brixen",
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
        name: "Aliah Pitts",
    },
    {
        id: 4,
        src: "https://uifaces.co/our-content/donated/vIqzOHXj.jpg",
        name: "Sean PJPGR Doran",
    },
    {
        id: 5,
        src: "https://randomuser.me/api/portraits/women/57.jpg",
        name: "Kate Morrison",
    },
    {
        id: 6,
        src: "https://images.unsplash.com/photo-1506803682981-6e718a9dd3ee?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=c3a31eeb7efb4d533647e3cad1de9257",
        name: "Alfredo Schafer",
    },
    {
        id: 7,
        src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
        name: "Natali Craig",
    },
];

export default function Stories() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
        });

        return () => {
            document.removeEventListener("resize", window);
        };
    }, []);

    return (
        <section className="border border-gray-300 bg-white flex items-center space-x-5 p-4 mb-8">
            {stories.map((story, index) => {
                if (width < 768 && index >= 6) {
                    return null;
                } else if (width < 640 && index >= 5) {
                    return null;
                }

                return <Story key={story.id} Avatar={Avatar} {...story} />;
            })}
        </section>
    );
}
