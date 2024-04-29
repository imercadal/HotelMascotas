import React from 'react';
import { 
    Grid,
    Container
} from '@mui/material';
import NavBar from '../Components/NavBar';

const Layout = ({ children }) => {
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
                height={"100vh"}
                backgroundColor="#AF5B5B"
                paddingTop={"1em"}
            >
                <NavBar/>
                <Container maxWidth="100%" sx={{
                    display: "flex",
                    flexDirection: "column", 
                    alignItems: "center", 
                    justifyContent: "flex",
                }}>
                    {children}
                </Container>
            </Grid>
        </>

    );
}

export default Layout;