import * as React from 'react';
import Layout from "../../Layout";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

import img2 from "../../Assets/Images/cat2.jpg";
import img3 from "../../Assets/Images/dog1.png";
import img4 from "../../Assets/Images/dog4.jpg";

import {
  Grid,
  Box,
  Paper,
  Typography,
  Button,
  Container
} from '@mui/material';


const bull = (
  <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
      •
  </Box>
);

const Home = (props) => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();

  const editUser = () => {
    navigate("/edit");
  };

  const goToMyPets = () => {
    if (isAuthenticated && user && user.id) {
      navigate(`/pets/mypets/${user.id}`);
    } else {
      navigate("/login");
    }
  }

  return (
    <Layout>
      {isAuthenticated ? (
      <Box sx={{ minWidth: 275}}>
        <Container >
        <Box sx={{ 
            border: '5px solid', 
            borderColor: '#F03A47', 
            backgroundColor: "#F6F4F3",
            borderRadius: "10px" }}>
        <Box sx={{
          padding: "30px",

          }}>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {bull}Your info {bull}
            </Typography>
            <Typography variant="h5" component="div">

                Welcome, { user.username }
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                { user.email }
            </Typography>
            <Typography variant="body2">
                My reservations: 
                <br />
                Other info I'd like to share
            </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-around", padding: "10px"}}>
            <Button variant='secondary' size="small" onClick={ editUser }>Edit</Button>
            <Button variant='secondary' size="small" onClick={ goToMyPets }>My Pets</Button>
        </Box>
        </Box>
    </Container>
        </Box>
        ) : (
          <div>
          <Grid container spacing={2} sx={{ backgroundColor: "#F6F4F3 "}}>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Paper sx={{ padding: "3rem", backgroundColor: "#F6F4F3"}} elevation={5}>
                  <img src={img4} alt="dog4" style={{ width: '100%', maxWidth: '100%', padding: '10px', borderRadius: '30px',  border: '5px solid', 
            borderColor: '#F03A47' }} />
                  <Typography variant='h5'>Boarding</Typography>
                </Paper>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Paper elevation={5} sx={{ padding: "3rem", backgroundColor: "#F6F4F3"}}>
                  <img src={img3} alt="dog1" style={{ width: '100%', maxWidth: '100%', padding: '10px', borderRadius: '30px',  border: '5px solid', 
            borderColor: '#F03A47' }} />
                  <Typography variant='h5'>Grooming</Typography>
                </Paper>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} >
                <Paper elevation={5} sx={{ padding: "3rem", backgroundColor: "#F6F4F3", justifyContent: 'center'}}>
                  <img src={img2} alt="dog4" style={{ width: '100%', maxWidth: '100%', padding: '10px', borderRadius: '30px',  border: '5px solid', 
            borderColor: '#F03A47'  }} />
                  <Typography variant='h5'>DayCare</Typography>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </div>
        )}
        

    </Layout>
  );
}

export default Home;


/*
//Importando componentes
import Card from "../../Components/Card";

//Importando usuarios por defecto.
import defaultUsers from "../../Context/Usuarios.jsx";

      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {defaultUsers.map((user) => (
          <Card
            key={user.nombre}
            apellido={user.apellido}
            nombre={user.nombre}
            edad={user.edad}
            colorPelo={user.colorPelo}
          />
        ))}
      </Grid>


                <div>
              <Box height='50vh' sx={{ display: "flex", width: "100%"}}>

                <Box height='50vh' sx={{ flex: "1", backgroundColor: "F03A47", justifyContent: "center"}}>
                  <Typography variant='h5'>Boarding</Typography>
                  <img src={img4} alt="dog4" style={{ flex: 1, padding: '10px' }}/>
                </Box>
                <Box height='50vh' sx={{ flex: "1", backgroundColor: "F03A47", justifyContent: "center"}}>
                  <Typography variant='h5'>Grooming</Typography>
                  <img src={img3} alt="dog1" style={{ flex: 1, padding: '10px' }}/>
                </Box>
                <Box height='50vh' sx={{ flex: "1", backgroundColor: "F03A47", justifyContent: "center"}}>
                  <Typography variant='h5'>DayCare</Typography>
                  <img src={img2} alt="dog4" style={{ flex: 1, padding: '10px' }}/>
                </Box>

              </Box>

            
          </div>
      */