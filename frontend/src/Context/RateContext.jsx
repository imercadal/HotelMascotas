import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import { 
    addRateRequest,
    getAllRatesRequest,
    getRateByIdRequest,
    deleteRateRequest
} from "../Api/rate";

const RateContext = createContext();

export const useRates = () => {
    const context = useContext(RateContext);

    if (!context) {
        throw new Error("useRates must be used within a RateProvider");
    }

    return context;
};

export function RateProvider({ children }) {
    const [rates, setRates] = useState([]);

    const addRate = async (rate) => {
        try {
            const res = await addRateRequest(rate);
            console.log(res);
            getAllRates();
        } catch (error) {
            console.error(error);
        }
    };

    const getAllRates = async () => {
        try {
            const res = await getAllRatesRequest();
            setRates(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    const getRateById = async (id) => {
        try {
            const res = await getRateByIdRequest(id);
            return res.data;
        } catch (error) {
            console.error(error);
        }
    };

    const deleteRate = async (id) => {
        try {
            const res = await deleteRateRequest(id);
            console.log(res);
            getAllRates();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <RateContext.Provider 
        value={{ 
            rates,
            addRate,
            getAllRates, 
            getRateById, 
            deleteRate 
            }}
            >
            {children}
        </RateContext.Provider>
    );
}

RateProvider.propTypes = {
    children: PropTypes.node.isRequired,
};