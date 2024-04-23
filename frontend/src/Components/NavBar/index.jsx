import { NavLink } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

import { 
  AppBar, 
  Container, 
  Toolbar, 
  Typography, 
  Button,
  Box
} from "@mui/material";

const Navbar = (props) => {
  const { isAuthenticated, user, logout } = useAuth();
  return (
    <AppBar position="static">
      <Container>
        <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
          <Box sx={{display: "flex", alignItems: "center"}}>
            <NavLink to="/">
              <Typography variant="h4" component="div" sx={{ flexGrow: 1, fontWeight: "500",color: "whitesmoke", fontFamily: "Roots" }}>
                Pet Paradise
              </Typography>
            </NavLink>
          </Box>
          <Box sx={{display: "flex", alignItems: "center"}}>

        {isAuthenticated ? (
          <>
            <Typography>Bienvenido {user.username}</Typography>
            <li>
              <NavLink to="/tasks">New reservation</NavLink>
            </li>
            <li>
              <NavLink to="/add-task">My reservations</NavLink>
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
    </AppBar>
  );
};

export default Navbar;

/*
      <ul className="flex items-center gap-3 cursor-pointer">
        <NavLink to="/">
          <li className=" font-semibold text-2xl">NombreAPP</li>
        </NavLink>

        {isAuthenticated ? (
          <>
            <li>Bienvenido {user.username}</li>
            <li>
              <NavLink to="/tasks">Tareas</NavLink>
            </li>
            <li>
              <NavLink to="/add-task">Nueva Tarea</NavLink>
            </li>
            <li>
              <NavLink className=" text-red-500" to="/"  onClick={()=>
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
        </ul>

      

      <ul className="flex items-center gap-3 cursor-pointer">
        <li className=" text-black/60">micorreo@correo.com</li>
        <li>
          <NavLink to="/login">Iniciar sesión</NavLink>
        </li>
        <li>
          <NavLink to="/register">Registrarse</NavLink>
        </li>
      </ul>
    </AppBar>
  );
};
*/