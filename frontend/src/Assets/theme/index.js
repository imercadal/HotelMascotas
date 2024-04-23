import { createTheme } from '@mui/material/styles';
import { yellow } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
        main: '#D5DFE5',
        },
        secondary: {
        main: '#F03A47 ',
        },
        error: {
        main: yellow.A400,
        },
    },
    justifyContent: "center",
});


export default theme;
