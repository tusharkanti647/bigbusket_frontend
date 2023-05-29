import "./Menu.css";
import SignIn from "../../signUP_signIn/SignIn";

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { IconButton, TextField } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


export default function Menu({ isLogIn }) {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();


    //handel model close or open
    //-------------------------------------------------------------------------
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    //-------------------------------------------------------------------------


    //handel control input
    //-------------------------------------------------------------------------



    //signout 
    //-------------------------------------------------------------------------
    const handelSignOut = () => {
        localStorage.removeItem("token");
        handleClose();
        navigate("/bigbusket_frontend");
        window.location.reload();
    }



    //console.log(cookieValue);
    return (
        <div>
            <IconButton
                size="large"
                edge="start"
                color="black"
                aria-label="open drawer"
                sx={{ mr: 2 }}
                onClick={handleOpen}
            >
                <MenuIcon style={{ fontSize: 50 }} />
            </IconButton>

            <Modal
                open={open}
                onClose={handleClose}

            // aria-labelledby="parent-modal-title"
            // aria-describedby="parent-modal-description"
            >
                <Box className='menu-modal' >
                    {/* <h2 id="parent-modal-title">Text insx={{width: 400 } a modal</h2>
                    <p id="parent-modal-description">
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </p> */}
                    <Link to="/bigbusket_frontend" onClick={handleClose}>
                        <div>Home</div>
                    </Link>
                    {isLogIn ? <div onClick={handelSignOut}>SignOut</div> : <SignIn />}
                    <div>User</div>
                </Box>

                {/* <SignUP handleClos={handleClose}/> */}
            </Modal>
        </div >
    );
}