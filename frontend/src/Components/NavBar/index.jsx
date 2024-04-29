import { NavLink, useNavigate } from "react-router-dom";
import * as React from "react";
import { useAuth } from "../../Context/AuthContext";

import { 
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  Stack,
  Container, 
  Toolbar, 
  Typography,
  Box,
  Button
} from "@mui/material";

const Navbar = (props) => {
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
      if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
      }
  
      prevOpen.current = open;
    }, [open]);

  const goToHome = () => {
    navigate("/");
  }
  
    const goToMyPets = () => {
    navigate(`/pets/mypets/${user._id}`);
  }

  const goToMyReservations = () => {
    navigate("/reservations");
  }

  const newReservation = () => {
    navigate("/reservations/new");
  }

  const login = () => {
    navigate("/login");
  }

  const register = () => {
    navigate("/register");
  }

  return (
      <div style={{
        backgroundColor: "#AF5B5B",
        height: "4em",
        alignItems: "baseline",
        justifyContent: "space-between",
        width: "100%",
        color: "F6F4F3"
      }}>
        <Container sx={{justifyContent: "space-between", alignItems: "center"}}>
          <Toolbar sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <Box sx={{display: "flex", alignItems: "center"}}>
              <Button onClick={ goToHome } sx={{ color: "#F6F4F3", alignItems: "center"}}>
                <Typography variant="h3" component="div" sx={{ 
                  flexGrow: 1, 
                  fontWeight: "500",
                  color: "F6F4F3", 
                  fontFamily: "Roots", 
                  textDecoration: "none" 
                }}>
                  Pet Paradise
                </Typography>
              </Button>
  
            </Box>
            <Box sx={{display: "flex", alignItems: "center"}}>
          {isAuthenticated ? (
            <>
              <Button onClick={ newReservation }>Nueva reserva</Button>
              <Stack direction="row" spacing={2}>
                    <Button
                      ref={anchorRef}
                      id="composition-button"
                      aria-controls={open ? 'composition-menu' : undefined}
                      aria-expanded={open ? 'true' : undefined}
                      aria-haspopup="true"
                      onClick={handleToggle}
                    >
                      {user.username}
                    </Button>
                    <Popper
                      open={open}
                      anchorEl={anchorRef.current}
                      role={undefined}
                      placement="bottom-start"
                      transition
                      disablePortal
                    >
                      {({ TransitionProps, placement }) => (
                        <Grow
                          {...TransitionProps}
                          style={{
                            transformOrigin:
                              placement === 'bottom-start' ? 'left top' : 'left bottom',
                          }}
                        >
                          <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                              <MenuList
                                autoFocusItem={open}
                                id="composition-menu"
                                aria-labelledby="composition-button"
                                onKeyDown={handleListKeyDown}
                              >
                                <MenuItem onClick={ goToMyReservations }>Mis reservas</MenuItem>
                                <MenuItem onClick={ goToMyPets }>Mis mascotas</MenuItem>
                                <MenuItem onClick={ logout }>Cerrar sesión</MenuItem>
                              </MenuList>
                            </ClickAwayListener>
                          </Paper>
                        </Grow>
                      )}
                    </Popper>
                  </Stack>
                </>
            
          ) : (
            <>
                <Button onClick={ login }>Iniciar sesión</Button>
                <Button onClick={ register }>Registrarse</Button>
            </>
          )}
            </Box>
  
          </Toolbar>
        </Container>
      </div>
  );
};

export default Navbar;