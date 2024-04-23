import React from 'react';

import {
    Box,
    Typography,
    CardActions,
    CardContent,
    Button
} from '@mui/material';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const Card = (props) => {

    return(

    <React.Fragment >
        <Box sx={{ 
            border: '5px solid', 
            borderColor: '#F03A47', 
            backgroundColor: "#F6F4F3",
            borderRadius: "10px" }}>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {bull}{props.antetitulo}{bull}
            </Typography>
            <Typography variant="h5" component="div">

                { props.titulo }
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                { props.bajada }
            </Typography>
            <Typography variant="body2">
                {props.descripcion}
                <br />
                { props.masInfo}
            </Typography>
        </CardContent>
        <CardActions>
            <Button variant='secondary' size="small" onClick={ props.onClick1 }>{ props.linkName1 }</Button>
            <Button variant='secondary' size="small" onClick={ props.onClick2 }>{ props.linkName2 }</Button>
        </CardActions>
        </Box>
    </React.Fragment>
    );
};

export default Card;