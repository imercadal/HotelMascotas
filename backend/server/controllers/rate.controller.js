import Rate from "../models/rate.model.js";

const addRate = async (req, res) => {
    try {
        let data = req.body;
        let newData = await Rate.create(data);
        res.status(200).json(newData);
    } catch (error) {
        console.log("Error" + error.message);
        res.status(400).json({
            message: "Please fill the form correctly",
        });
    }
}

const getAllRates = async (req, res) => {
    try {
        let list = await Rate.find().sort({ effectiveDate: 1 }).exec();
        res.status(200).json(list);
    } catch (error) {
        console.log("Error" + error.message);
        res.status(400).json({
            message: error.message,
        });
    }
}

const getRateById = async (req, res) => {
    try {
        let id = req.params.id;
        let found = await Rate.findById(id);
        res.status(200).json(found);
    } catch (error) {
        console.log("Error" + error.message);
        res.status(400).json({
            message: error.message,
        });
    }
}

const deleteRate = async (req, res) => {
    try {
        let id = req.params.id;
        await Rate.findByIdAndDelete(id);
        res.status(200).json();
    } catch (error) {
        console.log("Error" + error);
        res.status(400).json({
            message: error.message,
        });
    }
}

export { addRate, getAllRates, getRateById, deleteRate };
