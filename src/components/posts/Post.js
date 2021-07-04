import React, { useRef } from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { IconButton } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import NearMeOutlinedIcon from "@material-ui/icons/NearMeOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import { useStateValue } from "../../StateProvider";

export default function Post({ Avatar, src, name, image, timestamp, likes, message }) {
    const [{ user }, dispatch] = useStateValue();

    const inputRef = useRef(null);

    const handleCommentPost = (e) => {
        e.preventDefault();

        console.log(inputRef.current.value);

        inputRef.current.value = "";
    };

    const postDate = new Date(timestamp?.toDate());
    const formatedTime = postDate.toDateString();

    return (
        <div className="border border-gray-300 bg-white mb-12">
            <div className="flex items-center gap-4 p-3">
                <Avatar src={src} alt="Avatar" />
                <p className="text-sm font-medium">{name}</p>
                <IconButton className="focus:outline-none" style={{ marginLeft: "auto", width: 35, height: 35 }}>
                    <MoreHorizIcon />
                </IconButton>
            </div>
            {image && <img className="w-full block object-contain" src={image} alt="Post Image" />}
            <div className="p-3">
                <div className="flex gap-2 items-center mb-1">
                    <IconButton className="focus:outline-none" style={{ width: 40, height: 40 }}>
                        <FavoriteBorderIcon style={{ fontSize: 28 }} />
                    </IconButton>
                    <IconButton className="focus:outline-none" style={{ width: 40, height: 40 }}>
                        <ModeCommentOutlinedIcon style={{ fontSize: 28 }} />
                    </IconButton>
                    <IconButton className="focus:outline-none" style={{ width: 40, height: 40 }}>
                        <NearMeOutlinedIcon style={{ fontSize: 28 }} />
                    </IconButton>
                    <IconButton className="focus:outline-none" style={{ marginLeft: "auto", width: 40, height: 40 }}>
                        <BookmarkBorderOutlinedIcon style={{ fontSize: 28 }} />
                    </IconButton>
                </div>
                <div className="pl-2.5">
                    <p className="text-sm font-medium text-black mb-1">
                        {user.displayName.toLowerCase()} <span className="font-normal">{message}</span>
                    </p>
                    <p className="text-sm font-medium mb-1">{likes} likes</p>
                    <p className="text-xs text-gray-400 font-medium">{formatedTime}</p>
                </div>
            </div>
            <form onSubmit={handleCommentPost} className="p-3 border-top border border-gray-200">
                <div className="flex items-center pl-2 text-gray-500">
                    <SentimentSatisfiedOutlinedIcon className="cursor-pointer mr-3" style={{ fontSize: 28 }} />
                    <input ref={inputRef} className="bg-transparent focus:outline-none flex-grow text-sm" type="text" placeholder="Add new comment..." />
                    <button className="text-sm font-medium tracking-wider focus:outline-none text-blue-400 ml-auto hover:text-blue-500 transition-colors duration-200" type="submit">
                        Publishing
                    </button>
                </div>
            </form>
        </div>
    );
}
