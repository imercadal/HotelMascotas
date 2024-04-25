import Pet from "../models/pet.model.js";

const createPet = async (req, res) => {
    try {

        const { petName, petType, petWeight, petAge, petNotes,petOwner } = req.body;
        const newPet = new Pet({
            petName,
            petType,
            petWeight,
            petAge,
            petNotes,
            petOwner: petOwner
        });

        const savedPet = await newPet.save();
        console.log(savedPet)
        res.status(201).json(savedPet);

    } catch (error) {
        console.log("Error" + error.message);
        res.status(400).json({
        message: "Please fill the form correctly",
        });
    }
};


const getAllPets = async (req, res) => {
    try {
        let list = await Pet.find().populate("petOwner");
        res.status(200).json(list);
    } catch (error) {
        console.log("Error" + error.message);
        res.status(400).json({
        message: error.message,
        });
    }
};

const getPetById = async (req, res) => {
    try {
        let id = req.params.id;
        let found = await Pet.findById(id);
        res.status(200).json(found);
    } catch (error) {
        console.log("Error" + error.message);
        res.status(400).json({
        message: error.message,
        });
    }
};


const updatePet = async (req, res) => {
    try {
        let id = req.params.id;
        let data = req.body;
        await Pet.findByIdAndUpdate(id, data, { runValidators: true });
        res.status(200).json();
    } catch (error) {
        console.log("Error" + error);
        res.status(400).json({
        message: error.message,
        });
    }
};

const deletePet = async (req, res) => {
    try {
        let id = req.params.id;
        await Pet.findByIdAndDelete(id);
        res.status(200).json();
    } catch (error) {
        console.log("Error" + error);
        res.status(400).json({
        error: "La adopción no se ha podido realizar. Por favor, inténtelo de nuevo."});
    }
};

const getUsersPets = async (req, res) => {
    try {
        const userId = req.params.userId;
        console.log(userId)
        const userPets = await Pet.find({ petOwner: userId })
        console.log(userPets)
        res.status(200).json(userPets);

    }
    catch (error) {
        console.error("Error" + error);
        res.status(400).json({
        error: "No se han podido obtener tus mascotas"});
    }
};

export { createPet, getAllPets, getPetById, getUsersPets, updatePet, deletePet };
