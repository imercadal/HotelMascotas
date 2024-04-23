import { NavLink } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

import { 

  Container, 
  Toolbar, 
  Typography,
  Box
} from "@mui/material";

const Navbar = (props) => {
  const { isAuthenticated, user, logout } = useAuth();
  return (
    <div style={{
      backgroundColor: "#AF5B5B",
      height: "5em",
      alignItems: "baseline",
      justifyContent: "space-between",
      width: "100%",
      color: "F6F4F3"
    }}>
      <Container>
        <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
          <Box sx={{display: "flex", alignItems: "center"}}>
            <NavLink to="/">
              <Typography variant="h4" component="div" sx={{ 
                flexGrow: 1, 
                fontWeight: "500",
                color: "F6F4F3", 
                fontFamily: "Roots", 
                textDecoration: "none" 
              }}>
                Pet Paradise
              </Typography>
            </NavLink>
          </Box>
          <Box sx={{display: "flex", alignItems: "center"}}>

        {isAuthenticated ? (
          <>
            <Typography>Bienvenido {user.username}</Typography>
            <li>
              <NavLink to="/reservations/new">New reservation</NavLink>
            </li>
            <li>
              <NavLink to="/reservations">My reservations</NavLink>
            </li>
            <li>
              <NavLink to="/"  onClick={()=>
                logout()
              } >Cerrar sesión</NavLink>
            </li>
          </>
          
        ) : (
          <>
            <li>
              <NavLink to="/login">Iniciar sesión</NavLink>
            </li>
            <li>
              <NavLink to="/register">Registrarse</NavLink>
            </li>
          </>
        )}
          </Box>

        </Toolbar>
      </Container>
    </div>
  );
};

export default Navbar;