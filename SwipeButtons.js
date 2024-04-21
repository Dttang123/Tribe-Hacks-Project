import React from "react";

import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/icons-material/IconButton';

import "./SwipeButtons.css";

const SwipeButtons = () => {
    return (

        <div className="swipeButtons">
            <IconButton className="swipeButtons_repeat">
                <ReplayIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons_repeat">
                <CloseIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons_repeat">
                <StarRateIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons_repeat">
                <FavoriteIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons_repeat">
                <FlashOnIcon fontSize="large" />
            </IconButton>
        </div>
    );
};

export default SwipeButtons;