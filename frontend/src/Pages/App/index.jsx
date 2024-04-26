//Importando paquetes para navegar.
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Importando contexto de usuario.
import { AuthProvider } from "../../Context/AuthContext.jsx";

//Importando contextos.
import { PetProvider } from '../../Context/PetsContext';
import { ReservationProvider } from '../../Context/ReservationsContext';
import { RateProvider } from '../../Context/RateContext';

//Importando las paginas.
import Home from "../Home";
import NotFound from "../NotFound";
import LogIn from "../LogIn";
import Api from "../Api";
import Register from "../Register";
import ProfilePage from "../Profile";
import PetList from "../Pets/PetList";
import AddPet from "../Pets/AddPet";
import MyPets from "../Pets/MyPets";
import PetProfile from "../Pets/PetProfile";
import ReservationForm from "../Reservations/ReservationForm";
import MyReservations from "../Reservations/MyReservations";

//Importando protección de rutas.
import ProtectedRoute from "../../Components/ProtectedRoute/index.jsx";

const App = () => {
  return (
    <AuthProvider>
    <RateProvider>
    <ReservationProvider>
    <PetProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/register" element={<Register />} />
              <Route path="/api" element={<Api />} />
              <Route path="*" element={<NotFound />} />

              <Route element={<ProtectedRoute />}>
                <Route path="/pets" element={<PetList />} />
                <Route path="/pets/mypets/:id" element={<MyPets />} />
                <Route path="/pets/:id" element={<PetProfile />} />
                <Route path="/pets/new" element={<AddPet />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/reservations/new" element={<ReservationForm />} />
                <Route path="/reservations" element={<MyReservations />} />
              </Route>

            </Routes>
          </BrowserRouter>
    </PetProvider>
    </ReservationProvider>
    </RateProvider>
    </AuthProvider>
  );
};

export default App;
