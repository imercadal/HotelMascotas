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
                display: "flex",
                flexDirection: "column", 
                alignItems: "center", 
                justifyContent: "center",
                marginTop: "1em",
            }}>
                {children}
            </Container>
        </Grid>


    );
}

export default Layout;