import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { usePets } from "../../../Context/PetsContext";
import { useAuth } from "../../../Context/AuthContext";
import { 
    Box,
    Button,
    Paper
} from "@mui/material";
import Layout from "../../../Layout";


const AddPet = () => {
    const { register, handleSubmit } = useForm();
    const { createPet } = usePets();
    const { user } = useAuth();
    console.log(user)
    const navigate = useNavigate();

    const onSubmit = handleSubmit((data) => {
        try {
            const petData = { ...data, petOwner: user.id };
            console.log(petData)
            createPet(petData);
            navigate("/pets");
        } catch (error) {
            console.log(error)
        }
        
    });

    return (
        <Layout>
        <Paper variant="elevation" elevation={3} sx={{
            backgroundColor: "primary.main",
            padding: "30px",
            width: "100%", 
            margin: "auto" }}>
            <Box 
            sx={{ 
                maxWidth: "500px",
                margin: "auto",
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
                color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                border: '1px solid',
                borderColor: (theme) =>
                theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                borderRadius: 2,
                fontSize: '0.875rem',
                fontWeight: '700',
                padding: '20px',
                }}
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                <Box 
                sx={{ 
                display: 'flex',
                flexDirection: 'row',
                alignItems: "center",
                justifyContent: "center"}}
                >
                    <label>Nombre de la mascota:</label>
                    <input
                    type="text"
                    placeholder="Nombre de la mascota"
                    {...register("petName")}
                    autoFocus
                    />
                </Box>
                <Box 
                    sx={{ 
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px"}}
                >
                    <label>Tipo:</label>
                    <input
                    type="text"
                    placeholder="Tipo de mascota"
                    {...register("petType")}
                    autoFocus
                    />
                </Box>
                <Box 
                    sx={{ 
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px"}}
                >
                    <label>Peso:</label>
                    <input
                    type="number"
                    placeholder="Peso"
                    {...register("petWeight")}
                    autoFocus/>
                </Box>
                <Box 
                    sx={{ 
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px"}}
                >
                    <label>Edad:</label>
                    <input
                    type="number"
                    placeholder="Edad"
                    {...register("petAge")}
                    autoFocus/>
                </Box>
                <Box 
                    sx={{ 
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px"}}
                >
                    <label>Cuidados especiales:</label>
                    <input
                    type="text"
                    placeholder="Notas adicionales"
                    {...register("petNotes")}
                    autoFocus/>
                </Box>
                <Box 
                    sx={{ 
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px"}}
                >
                    <Button
                        type="submit"
                        variant="contained"
                    >Registrar mascota</Button>
                </Box>
            </form>
        </Box>
        </Paper>
        <Paper/>
        </Layout>
    );
};

export default AddPet;


/*
const AddPet = () => {
    const navigate = useNavigate();

    const [petName, setPetName] = useState("");
    const [petType, setPetType] = useState("");
    const [petWeight, setPetWeight] = useState("");
    const [petAge, setPetAge] = useState("");
    const [petNotes, setPetNotes] = useState("");

    const createPet = async () => {
    
    if (petName !== "" && petType !== "") {
        let data = {
            petName: petName,
            petType: petType,
            petWeight: petWeight,
            petAge: petAge,
            petNotes: petNotes
        };
        try {
            let result = await axios.post("http://localhost:8000/api/pets/new",data);
            if (result.status === 200) {
            navigate("/");
            }
        } catch (error) {
            alert(error.response.data.message);
        }
        } else {
        alert("Por favor completa los campos requeridos");
        }
    };

    return (
        <div>
        <Paper variant="elevation" elevation={3} sx={{
            backgroundColor: "primary.main",
            padding: "30px",
            width: "100%", 
            margin: "auto" }}>
            <Box 
            sx={{ 
                maxWidth: "500px",
                margin: "auto",
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
                color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                border: '1px solid',
                borderColor: (theme) =>
                theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                borderRadius: 2,
                fontSize: '0.875rem',
                fontWeight: '700',
                padding: '20px',
                }}
            >
                <form>
                <Box 
                sx={{ 
                display: 'flex',
                flexDirection: 'row',
                alignItems: "center",
                justifyContent: "center"}}
                >
                    <label>Nombre de la mascota:</label>
                    <input
                    type="text"
                    value={petName}
                    onChange={(e) => setPetName(e.target.value)}
                    />
                    {petName.length < 3 && petName.length > 0 && (
                    <p>
                        El nombre debe tener al menos 3 caracteres...
                    </p>
                    )}
                </Box>
                <Box 
                    sx={{ 
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px"}}
                >
                    <label>Tipo:</label>
                    <input
                    type="text"
                    value={petType}
                    onChange={(e) => setPetType(e.target.value)}
                    />
                    {petType.length < 3 && petType.length > 0 && (
                    <p>
                        Tipo debe tener al menos 3 caracteres...
                    </p>
                    )}
                </Box>
                <Box 
                    sx={{ 
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px"}}
                >
                    <label>Peso:</label>
                    <input
                    type="number"
                    value={petWeight}
                    onChange={(e) => setPetWeight(e.target.value)}
                    />
                </Box>
                <Box 
                    sx={{ 
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px"}}
                >
                    <label>Edad:</label>
                    <input
                    type="number"
                    value={petAge}
                    onChange={(e) => setPetAge(e.target.value)}
                    />
                </Box>
                <Box 
                    sx={{ 
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px"}}
                >
                    <label>Cuidados especiales:</label>
                    <input
                    type="text"
                    value={petNotes}
                    onChange={(e) => setPetNotes (e.target.value)}
                    />
                </Box>
                <Box 
                    sx={{ 
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px"}}
                >
                    <Button
                        onClick={createPet}
                        name={"Agregar mascota 📤"}
                    ></Button>
                </Box>
            </form>
        </Box>
        </Paper>
        <Paper/>
        </div>
    );
};

export default AddPet;

*/