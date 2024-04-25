import * as React from 'react';
import Layout from "../../Layout";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../../Context/AuthContext";
import UserCard from "../../Components/UserCard";

import img2 from "../../Assets/Images/cat2.jpg";
import img3 from "../../Assets/Images/dog1.png";
import img4 from "../../Assets/Images/dog4.jpg";

import {
  Grid,
  Box,
  Paper,
  Typography
} from '@mui/material';


const Home = (props) => {
  const navigate = useNavigate();

  const { isAuthenticated, user, token } = useAuth();

  useEffect(() => {
    console.log('JWT Token:', token);
  }, [token]);

  const editUser = () => {
    navigate("/edit");
  };

  const goToMyPets = () => {
    console.log(user.id)
    console.log(user)
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
        <UserCard 
          variant="outlined"
          antetitulo="Your info:"
          titulo={ user.username}
          bajada={ user.email }
          descripcion= "my reservations"
          masInfo= "my pets"
          linkName1="Edit"
          onClick1={ editUser }
          linkName2="My pets"
          onClick2={ goToMyPets }
        
        />
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