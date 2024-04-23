import { useState } from "react";
import {
    Box,
    Button
} from '@mui/material';

const ReservationForm = (props) => {
    const { initialReservationDate, initialCheckInDate, initialCheckOutDate, initialReservationNotes, onSubmitProp } = props;
    const [checkInDate, setCheckInDate] = useState(initialCheckInDate);
    const [checkOutDate, setCheckOutDate] = useState(initialCheckOutDate);
    const [reservationNotes, setReservationNotes] = useState(initialReservationNotes);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({
            checkInDate,
            checkOutDate,
            reservationNotes
            });
    };

    return(
        <Box 
        sx={{ 
            display: 'flex', flexDirection: 'column',
            alignItems: "center", justifyContent: "center",
            p: 1, m: 1,
            fontSize: '0.875rem', fontWeight: '700',
            padding: '20px',
        }}
        >
            <form onSubmit={onSubmitHandler}>
                <Box 
                    sx={{ 
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px"}}
                >
                    <label>Check-in Date:</label>
                    <input
                    type="date"
                    value={ checkInDate }
                    onChange={(e) => setCheckInDate(e.target.value)}
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
                    <label>Check-out Date:</label>
                    <input
                    type="date"
                    value={ checkOutDate} 
                    onChange={(e) => setCheckOutDate(e.target.value)}
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
                    <label>Reservation Notes:</label>
                    <input
                        type="text"
                        value={reservationNotes}
                        onChange={(e) => setReservationNotes(e.target.value)}
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
                        type={"submit"}
                    >Make reservation</Button>
                </Box>
            </form>
        </Box>
    )

};

export default ReservationForm;