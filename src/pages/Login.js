import { Button } from "@material-ui/core";
import React from "react";
import logo from "../images/logo.svg";
import { auth, provider } from "../firebase";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

export default function Login() {
    const [{ user }, dispatch] = useStateValue();

    const handleLogin = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="py-5 flex flex-col items-center text-center">
            <img className="my-5 object-contain" src={logo} alt="Instagram Logo" style={{ width: 200, height: 200 }} />
            <Button className="focus:outline-none" onClick={handleLogin} style={{ background: "#1976D2", paddingTop: "0.8rem", paddingBottom: "0.8rem", borderRadius: "1.6rem" }} variant="contained" color="primary">
                Login With Google
            </Button>
        </div>
    );
}
