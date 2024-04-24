import Layout from "../../Layout";
import * as React from 'react';
import { 
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container 
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { useForm } from "react-hook-form"; // Importamos el hook de react-hook-form

import { useAuth } from "../../Context/AuthContext"; // Importamos el contexto de usuario
import { useNavigate, NavLink } from "react-router-dom";
import { useEffect } from "react";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); // Inicializamos el hook de react-hook-form
  const { signup, isAuthenticated, errors: RegisterErrors } = useAuth(); // Importamos la función signup del contexto de usuario
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  const onSubmit = handleSubmit(async (values) => {
    // Llamamos a la función signup del contexto de usuario
    await signup(values);
  });

  return (
    <Layout>
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          {RegisterErrors.map((error, index) => (
          <div key={index} >{error}
          </div>
          ))}
          <Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="username"
                  name="username"
                  {...register("username", { required: true })}
                  fullWidth
                  id="username"
                  label="Username"
                  autoFocus
                />
                {errors.username && (
                  <span>El username es requerido</span>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register("email", { required: true })}
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
                {errors.email && (
                  <span>El email es requerido</span>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register("password", { required: true })}
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
                {errors.password && (
                  <span>La contraseña es requerida</span>
                )}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}

export default Register;


      /* Creamos un formulario con el hook de react-hook-form 
      <div>
      <h1 className=" font-extrabold">Registro de usuario</h1>

        {RegisterErrors.map((error, index) => (
          <div key={index}  className="bg-red-500 p-2  text-white" >{error}
          </div>
        ))}
        <form
          onSubmit={onSubmit}
        >
          <input
            type="text"
            {...register("username", { required: true })}
            placeholder="Nombre de usuario"
          />
          {errors.username && (
            <span className=" text-red-500">El username es requerido</span>
          )}
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Correo electrónico"
          />

          {errors.email && (
            <span className=" text-red-500">El email es requerido</span>
          )}
          <input
            type="password"
            {...register("password", { required: true })}
            placeholder="Contraseña"
          />
          {errors.password && (
            <span className=" text-red-500">La password es requerida</span>
          )}
          <button type="submit">Registrarse</button>
        </form>
        <p className="flex gap-x-2 justify-between">
          ¿Ya tienes una cuenta? <NavLink to="/login" className="text-blue-500">Inicia sesión</NavLink>
        </p>
      </div>

*/