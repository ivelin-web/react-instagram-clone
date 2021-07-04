import { Avatar } from "@material-ui/core";
import React from "react";
import { useStateValue } from "../../StateProvider";
import SidebarRow from "./SidebarRow";

const suggestions = [
    {
        id: 1,
        src: "https://images.pexels.com/photos/355164/pexels-photo-355164.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb",
        name: "Isabel Kirkland",
    },
    {
        id: 2,
        src: "https://randomuser.me/api/portraits/men/41.jpg",
        name: "Väinö Pakkala",
    },
    {
        id: 3,
        src: "https://randomuser.me/api/portraits/men/41.jpg",
        name: "Väinö Pakkala",
    },
    {
        id: 4,
        src: "https://uifaces.co/our-content/donated/0QpP2NSG.jpg",
        name: "Daniela",
    },
    {
        id: 5,
        src: "https://uifaces.co/our-content/donated/2bvuFyb8.jpg",
        name: "Saeed Asadnezhad",
    },
];

export default function Sidebar() {
    const [{ user }, dispatch] = useStateValue();

    return (
        <section className="sidebar hidden xl:fixed xl:block right-0 h-screen">
            <div className="flex items-center gap-3 mb-4">
                <Avatar className="cursor-pointer" src={user.photoURL} alt="Avatar" style={{ width: 60, height: 60 }} />
                <div>
                    <p className="text-sm font-medium cursor-pointer">{user.displayName.toLowerCase()}</p>
                    <p className="text-sm font-light tracking-wider text-gray-500">{user.displayName}</p>
                </div>
                <a className="text-blue-400 text-xs tracking-wider font-bold hover:text-blue-500 transition-colors duration-300 ml-auto" href="#">
                    Switching
                </a>
            </div>
            <div className="flex justify-between items-center mb-5">
                <h5 className="text-gray-400 text-sm font-bold">Suggestions for you</h5>
                <a href="#" className="text-xs font-bold hover:underline tracking-wider">
                    See all
                </a>
            </div>
            {suggestions.map((suggestion) => {
                return <SidebarRow key={suggestion.id} Avatar={Avatar} {...suggestion} />;
            })}
        </section>
    );
}
