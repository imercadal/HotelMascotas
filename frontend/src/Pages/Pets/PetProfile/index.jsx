import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usePets } from "../../../Context/PetsContext";
import Navbar from "../../../Components/NavBar"
import {
    Typography,
    Paper
} from "@mui/material";
import UserCard from "../../../Components/UserCard";

const PetProfile = () => {
    const params = useParams();
    const petId = params._id;
    console.log(petId);

    const { getPet, deletePet, pet } = usePets();

    const navigate = useNavigate();

    useEffect(() => {
        getPet(petId);
        console.log(pet)
    }, []);

    const goToEdit = () => {
        navigate("/");
    };

    const handleDelete = () => {
        try{
            deletePet(pet._id);
            alert("Pet deleted successfully");
            navigate("/");
        } catch (error) {
            console.error("Error deleting pet:", error);
            alert("Failed to delete pet. Please try again.");
        }
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
        <Navbar/>
        <Paper
            variant="elevation"
            elevation={3}
            sx={{
                backgroundColor: "#F6F4F3",
                padding: "30px",
            }}
        >
            <UserCard
                antetitulo={"Mascota"}
                titulo={"Nombre: " + pet.petName}
                bajada={"Tipo: " + pet.petType}
                descripcion={`${pet.petAge} años, ${pet.petWeight}kg`}
                masInfo={pet.petNotes}
                onClick1={ goToEdit }
                linkName1={"Editar"}
                onClick2={ handleDelete }
                linkName2={"Eliminar"}
            ></UserCard>
        </Paper>
        </div>
    );
};

export default PetProfile;