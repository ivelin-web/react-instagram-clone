import React, { useRef } from "react";
import { Avatar } from "@material-ui/core";
import PhotoIcon from "@material-ui/icons/Photo";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import { useState } from "react";
import firebase from "firebase";
import db, { storage } from "../../firebase";
import { useStateValue } from "../../StateProvider";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function PostInput() {
    const inputRef = useRef(null);
    const fileRef = useRef(null);

    const [imageToPost, setImageToPost] = useState(null);
    const [openDialogError, setOpenDialogError] = useState(false);

    const [{ user }, dispatch] = useStateValue();

    const handleDialogOpen = () => {
        setOpenDialogError(true);
    };

    const handleDialogClose = () => {
        setOpenDialogError(false);
    };

    const handleSubmitPost = (e) => {
        e.preventDefault();

        if (!inputRef.current.value) {
            return;
        }

        if (!imageToPost) {
            handleDialogOpen();
            return;
        }

        db.collection("posts")
            .add({
                src: user.photoURL,
                name: user.displayName,
                likes: 0,
                message: inputRef.current.value,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            })
            .then((doc) => {
                const uploadTask = storage.ref(`/posts/${doc.id}`).putString(imageToPost, "data_url");

                removeImageFromPost();

                uploadTask.on(
                    "state_change",
                    null,
                    (error) => console.log(error),
                    () => {
                        storage
                            .ref("posts")
                            .child(doc.id)
                            .getDownloadURL()
                            .then((url) => {
                                db.collection("posts").doc(doc.id).set(
                                    {
                                        image: url,
                                    },
                                    { merge: true }
                                );
                            });
                    }
                );
            });

        inputRef.current.value = "";
    };

    const addImageToPost = (e) => {
        const reader = new FileReader();

        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            setImageToPost(readerEvent.target.result);
        };
    };

    const removeImageFromPost = () => {
        setImageToPost(null);
    };

    return (
        <div className="mb-8 bg-white p-3 border border-gray-300">
            <Dialog open={openDialogError} keepMounted onClose={handleDialogClose} aria-labelledby="alert-dialog-slide-title" aria-describedby="alert-dialog-slide-description">
                <DialogTitle id="alert-dialog-slide-title">{"Select image first!"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">Please select any image first and then upload a post.</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button className="focus:outline-none" onClick={handleDialogClose} color="primary">
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
            <div className="flex items-center border-b border-gray-200 pb-3 mb-3 gap-3">
                <Avatar className="cursor-pointer" src={user.photoURL} alt="Avatar" />
                <form onSubmit={handleSubmitPost} className="flex-grow">
                    <input ref={inputRef} className="w-full focus:outline-none bg-transparent rounded-full bg-gray-100 p-2 pl-3 hover:bg-gray-200 transition-colors duration-200" type="text" placeholder={`Whats on your mind, ${user.displayName.split(" ")[0]}`} />
                    <button type="submit" hidden>
                        Submit
                    </button>
                </form>
                {imageToPost && (
                    <div onClick={removeImageFromPost} className="cursor-pointer">
                        <img className="w-14 h-14 shadow-md object-cover block rounded-full" src={imageToPost} alt="Post Image" />
                        <p className="text-sm text-red-500 text-center font-medium">Remove</p>
                    </div>
                )}
            </div>

            <div className="flex items-center">
                <div className="flex items-center justify-center flex-grow rounded-lg p-1 gap-1 cursor-pointer hover:bg-gray-100 transition-colors duration-200" title="Not Working...">
                    <VideoCallIcon className="text-red-500" style={{ fontSize: 30 }} />
                    <p className="text-gray-500 font-medium text-sm select-none">Live Video</p>
                </div>
                <div onClick={() => fileRef.current.click()} className="flex items-center justify-center flex-grow rounded-lg p-1 gap-1 cursor-pointer hover:bg-gray-100 transition-colors duration-200">
                    <PhotoIcon className="text-green-500" style={{ fontSize: 30 }} />
                    <p className="text-gray-500 font-medium text-sm select-none">Image/Video</p>
                    <input ref={fileRef} onChange={addImageToPost} type="file" hidden />
                </div>
            </div>
        </div>
    );
}
