import React, { useState } from "react";
import logo from "../../images/logo.svg";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import NearMeOutlinedIcon from "@material-ui/icons/NearMeOutlined";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import { Avatar, IconButton } from "@material-ui/core";
import { useStateValue } from "../../StateProvider";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { actionTypes } from "../../reducer";

export default function Header() {
    const [{ user }, dispatch] = useStateValue();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClickMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);

        dispatch({
            type: actionTypes.SET_USER,
            user: null,
        });
    };

    return (
        <header className="sticky top-0 left-0 z-50 border-bottom border-gray-300 border flex items-center justify-between my-container py-2 bg-white">
            <img className="object-contain h-10 cursor-pointer mr-4 sm:mr-0" src={logo} alt="Logo" />
            <div className="h-8 sm:w-40 md:w-48 lg:w-56 flex items-center space-x-1 text-gray-400 bg-gray-100 border border-solid border-gray-300 rounded-full sm:rounded-lg pl-2 pr-2 sm:pr-0 mr-auto sm:mr-0">
                <SearchIcon className="cursor-pointer" style={{ fontSize: "100%", fontWeight: "bold" }} />
                <input className="border-none hidden sm:block flex-grow bg-transparent outline-none shadow-none text-xs" type="text" placeholder="Search" />
            </div>
            <div className="flex items-center text-gray-900">
                <div className="hidden sm:flex items-center">
                    <IconButton className="focus:outline-none h-12 w-12">
                        <HomeIcon style={{ fontSize: 25 }} />
                    </IconButton>
                    <IconButton className="focus:outline-none h-12 w-12">
                        <NearMeOutlinedIcon style={{ fontSize: 25 }} />
                    </IconButton>
                    <IconButton className="focus:outline-none h-12 w-12">
                        <ExploreOutlinedIcon style={{ fontSize: 25 }} />
                    </IconButton>
                    <IconButton className="focus:outline-none h-12 w-12">
                        <FavoriteBorderOutlinedIcon style={{ fontSize: 25 }} />
                    </IconButton>
                </div>
                <IconButton onClick={handleClickMenu} className="focus:outline-none h-12 w-12">
                    <Avatar alt="Profile Avatar" src={user.photoURL} style={{ width: 25, height: 25 }} />
                </IconButton>
                <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleCloseMenu}>
                    <MenuItem onClick={handleCloseMenu}>Logout</MenuItem>
                </Menu>
            </div>
        </header>
    );
}
