import * as React from 'react';
import Layout from "../../Layout";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { usePets } from "../../Context/PetsContext";

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

  const { getAllPets, pets } = usePets();
  const [myPets, setMyPets] = useState([]);

  useEffect(() => {
      getAllPets();
  }, []);

  useEffect (() => {
      if (isAuthenticated && user && pets.length > 0) {
          const filteredPets = pets.filter((pet) => pet.petOwner._id === user.id);
          setMyPets(filteredPets);
      }
  }, [pets, user, isAuthenticated]);

  const editUser = () => {
      navigate('/user/edit/:id');
  }

  const goToMyPets = () => {
      navigate('/pets/mypets/:id');
  }

  const goToMakeReservation = () => {
      navigate('/reservations/new');
  }

  return (
    <Layout>
      {isAuthenticated ? (
      <Box sx={{ minWidth: 275,  borderRadius: '10px'}}>

        <Container >
        <Paper elevation={15} sx={{ 
            
            backgroundColor: "#F6F4F3",
            borderRadius: "10px",
            minWidth: "80vh",
            padding: "30px"
            }}>
            
            <Typography variant="h2" component="div">

                Welcome, { user.username }
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Tus mascotas:
            </Typography>
            <Typography variant="body2">
                {myPets.map((pet) => (
                    <Box key={pet._id} sx={{ display: "flex", marginLeft: "5em"}}>
                        <Typography variant="h5" sx={{fontFamily: "Roots" }} >
                          {bull} {pet.petName}
                        </Typography>
                    </Box>
                ))}
            
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-around", padding: "10px"}}>
              <Button 
                variant='secondary' 
                size="small" 
                onClick={ editUser }
                sx={{ color: "#F03A47" }}
                >My info</Button>
              <Button 
                variant='secondary' 
                size="small" 
                onClick={ goToMyPets }
                sx={{ color: "#F03A47" }}
              >My Pets</Button>
            </Box>
        <Grid container spacing={2} sx={{ 
            borderRadius: "10px", minWidth: "80vh", padding: '20px'}}>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Button onClick={ goToMakeReservation }>
                <img src={img4} alt="dog4" style={{ width: '100%', maxWidth: '100%', padding: '10px', borderRadius: '30px',  border: '5px solid', 
            borderColor: '#F03A47' }} />
                  
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Button onClick={ goToMakeReservation }>
                <img src={img3} alt="dog1" style={{ width: '100%', maxWidth: '100%', padding: '10px', borderRadius: '30px',  border: '5px solid', 
            borderColor: '#F03A47' }} />
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} >
                <Button onClick={ goToMakeReservation }>
                <img src={img2} alt="dog4" style={{ width: '100%', maxWidth: '100%', padding: '10px', borderRadius: '30px',  border: '5px solid', 
            borderColor: '#F03A47'  }} />
                  
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
    </Container>
        </Box>
        ) : (
          <div>
          <Grid container spacing={2} sx={{ 
            borderRadius: "10px", padding: '10px'}}>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Paper sx={{ padding: "3rem", backgroundColor: "#F6F4F3"}} elevation={5}>
                  <img src={img4} alt="dog4" style={{ width: '100%', maxWidth: '100%', padding: '10px', borderRadius: '30px',  border: '5px solid', 
            borderColor: '#F03A47' }} />
                  <Typography variant='h4' sx={{fontFamily: "Roots"}} >Boarding</Typography>
                </Paper>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Paper elevation={5} sx={{ padding: "3rem", backgroundColor: "#F6F4F3", justifyContent: 'center', alignItems: 'center'}}>
                  <img src={img3} alt="dog1" style={{ width: '100%', maxWidth: '100%', padding: '10px', borderRadius: '30px',  border: '5px solid', 
            borderColor: '#F03A47' }} />
                  <Typography variant='h4' sx={{fontFamily: "Roots" }} >Grooming</Typography>
                </Paper>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} >
                <Paper elevation={5} sx={{ padding: "3rem", backgroundColor: "#F6F4F3", justifyContent: 'center'}}>
                  <img src={img2} alt="dog4" style={{ width: '100%', maxWidth: '100%', padding: '10px', borderRadius: '30px',  border: '5px solid', 
            borderColor: '#F03A47'  }} />
                  <Typography variant='h4' sx={{fontFamily: "Roots" }} >DayCare</Typography>
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

