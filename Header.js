import React from 'react';
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import IconButton from '@mui/icons-material/IconButton';
import { link } from "react-router-dom";


function Header(){
    return (
        <div className="header">
            <IconButton>
                <PersonIcon className="header__icon" fontSize="large"/>
            </IconButton>
            
            <CheckroomIcon className="header__icon" fontSize="large"/>
            {/*<img src = ___ alt=""/>*/}

            <Link to="/chat">
                <IconButton>
                    <ForumIcon className="header__icon" fontSize="large"/>
                </IconButton>
            </Link>
            
        </div>
    )
}

export default Header