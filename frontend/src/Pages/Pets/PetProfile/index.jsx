import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ButtonComp } from "../../components/ButtonComp/ButtonComp";
import Navbar from "../../components/Navbar/Navbar";
import {
    Typography,
    Paper,
    List,
    ListItem,
    ListItemText,
    Container,
} from "@mui/material";

export const DetailsPage = () => {
    const params = useParams();
    const petId = params.id;

    const navigate = useNavigate();

    const [pet, setPet] = useState({
        petName: "",
        petType: "",
        petDescription: ""
    });

    const getPetById = async () => {
        try {
        let result = await axios.get(
            "http://localhost:8000/api/pets/get/" + petId
        );
        setPet(result.data);
        } catch (error) {
        console.log(error);
        }
    };

    useEffect(() => {
        getPetById();
    }, []);

    const deletePet = async () => {
        const confirmed = window.confirm(
        `Estás a punto de eliminar a ${pet.petName}. ¿Quieres continuar?`
        );
        if (confirmed) {
        try {
            let result = await axios.delete(
            "http://localhost:8000/api/pets/delete/" + petId
            );
            if (result.status === 200) navigate("/");
        } catch (error) {
            alert(error.response.data.message);
        }
        }
    };

    const goToHome = () => {
        navigate("/");
    };

    if (!pet) {
        return (
        <Typography variant="h2" sx={{ padding: "50px" }}>
            Loading...
        </Typography>
        );
    }

    return (
        <div>
        <Navbar
            onclick={goToHome}
            subTitle={`Detalles de: ${pet.petName}`}
            linkName={"Volver al inicio"}
        ></Navbar>

        <Paper
            variant="elevation"
            elevation={3}
            sx={{
            backgroundColor: "primary.main",
            padding: "30px",
            }}
        >
            <Paper
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                p: 1,
                m: 1,
                fontSize: "0.875rem",
                fontWeight: "700",
                padding: "20px",
                maxWidth: "500px",
                margin: "auto",
            }}
            >
            <Container sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                variant="h5"
                component="label"
                htmlFor="type-select"
                sx={{
                    fontWeight: "bold",
                    marginBottom: "10px",
                    display: "flex",
                    alignItems: "center",
                }}
                >
                {pet.petName}:
                </Typography>
            </Container>
            <List sx={{ width: "100%", maxWidth: 360 }}>
                <ListItem disablePadding>
                <Typography
                    variant="h6"
                    component="label"
                    htmlFor="type-select"
                    sx={{
                    marginRight: "10px",
                    fontWeight: "regular",
                    marginBottom: "10px",
                    }}
                >
                    <strong>Tipo: </strong>
                    {pet.petType}
                </Typography>
                </ListItem>
                <ListItem disablePadding>
                <Typography
                    variant="h6"
                    component="label"
                    htmlFor="type-select"
                    sx={{
                    marginRight: "10px",
                    fontWeight: "regular",
                    marginBottom: "10px",
                    }}
                >
                    <strong>Descripción: </strong>
                    {pet.petDescription}
                </Typography>
                </ListItem>
                <ListItem disablePadding>
                <ListItemText
                    primary={
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        Gracias:
                    </Typography>
                    }
                />
                </ListItem>
            </List>
            <ButtonComp
                onclick={deletePet}
                variant={"contained"}
                type={"button"}
                name={`🏰 ${" "} Eliminar a ${pet.petName}`}
                color={"main"}
                sx={{ marginBottom: 10, gap: "10px" }}
                size="small"
            ></ButtonComp>
            </Paper>
        </Paper>
        </div>
    );
};
