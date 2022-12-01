import { Avatar, Box, Button, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import React from 'react';
import GLoginButton from './GLoginButton';

const settings = ['login']

function UserMenu() {
    const isUser = false;
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
      };

    return (
        <>
            {isUser ?
            <Button color="inherit">Login</Button> :
            <GLoginButton/>
            }
        </>
    );
      

}

export default UserMenu;