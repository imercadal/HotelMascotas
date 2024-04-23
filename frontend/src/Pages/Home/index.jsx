import * as React from 'react';
import Layout from "../../Layout";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import UserCard from "../../Components/UserCard";

import img2 from "../../Assets/Images/cat2.jpg";
import img3 from "../../Assets/Images/dog1.png";
import img4 from "../../Assets/Images/dog4.jpg";

import {
  Container,
  Box,
  Typography
} from '@mui/material';


const Home = (props) => {
  const navigate = useNavigate();

  const { isAuthenticated, user } = useAuth();

  const editUser = () => {
    navigate("/user/edit");
  };

  const goToMyPets = () => {
    navigate("/user/pets");
  }

  return (
    <Layout>
      {isAuthenticated ? (
      <Box sx={{ minWidth: 275 }}>
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
          <Container maxWidth="sm">
            <Box>
              <Typography variant="h4" component="h1" gutterBottom>WELCOME TO OUR PAGE</Typography>
            </Box>
            <Container height='50vh' maxWidth={ false } >
              <Box height='50vh' sx={{ display: "flex", width: "100%"}}>
                <img src={img2} alt="cat2" style={{ flex: 1, padding: '20px' }}/>
                <img src={img3} alt="dog1" style={{ flex: 1, padding: '10px' }}/>
                <img src={img4} alt="dog4" style={{ flex: 1, padding: '10px' }}/>
              </Box>
            </Container>
            
          </Container>
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
      */