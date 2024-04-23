import React from 'react';
import { 
    Grid,
    Container
} from '@mui/material';
import NavBar from '../Components/NavBar';

const Layout = ({ children }) => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <NavBar/>
            <Container maxWidth="100%" style={{
                backgroundColor: "rosybrown",
                height: "30em", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center"
            }}>
                {children}
            </Container>
        </Grid>


    );
}

export default Layout;