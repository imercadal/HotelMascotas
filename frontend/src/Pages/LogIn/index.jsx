import * as React from 'react';
import Layout from "../../Layout";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
  Container
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../../Context/AuthContext.jsx";
import { useEffect } from "react";

function LogIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, errors: SigninErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }

  }, [isAuthenticated])

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
            Sign in
          </Typography>
          {SigninErrors.map((error, index) => (
            <div key={index} className="bg-red-500 p-2  text-white my-2">
              {error}
            </div>
          ))}
          <Box component="form" onSubmit={ onSubmit } noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              {...register("email", { required: true })}
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            {errors.email && (
              <span className=" text-red-500">El email es requerido</span>
            )}
            <TextField
              margin="normal"
              {...register("password", { required: true })}
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {errors.password && (
            <span className=" text-red-500">La password es requerida</span>
            )}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}

export default LogIn;

/*
      <div className="bg-zinc-200 max-w-md p-10 rounded-md text-center">
        <h1 className=" font-extrabold">Iniciar sesión</h1>
        {SigninErrors.map((error, index) => (
          <div key={index} className="bg-red-500 p-2  text-white my-2">
            {error}
          </div>
        ))}
        <form
          onSubmit={onSubmit}
        >
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
          <button type="submit">Iniciar sesión</button>
        </form>
          <p className="flex gap-x-2 justify-between">
            ¿No tienes una cuenta?
            <Link to="/register" className="text-blue-500">
              Regístrate
            </Link>
          </p>
        </div>
*/