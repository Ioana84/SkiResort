import { Grid } from '@mui/material';
import React from 'react';
import GLoginButton from '../../components/user/GLoginButton';


function SignIn() {
    return (
    <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="top"
        boxShadow={3}
        height='60%'
        width='30%'
        minWidth='350px'
    >
        <h3>Sign In</h3>
        <GLoginButton/>
    </Grid>
    )
}

export default SignIn;