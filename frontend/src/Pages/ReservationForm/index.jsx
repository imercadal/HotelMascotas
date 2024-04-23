import React from 'react';
import ReservationForm from '../../Components/ReservationForm';
import { useReservations } from '../../Context/ReservationsContext';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const CreateReservationPage = () => {
    const { register, handleSubmit } = useForm();
    const { createReservation } = useReservations();
    const navigate = useNavigate();

    const onSubmit = handleSubmit((formData) => {
        createReservation(formData);
        console.log(formData);
        navigate("/reservations");
    });

    return (
        <div>
            <h1>Create Reservation</h1>
            <ReservationForm
                initialReservationDate={initialReservationDate}
                initialCheckInDate={initialCheckInDate}
                initialCheckOutDate={initialCheckOutDate}
                initialReservationNotes={initialReservationNotes}
                onSubmitProp={onSubmit}
            />
        </div>
    );
};

export default CreateReservationPage;