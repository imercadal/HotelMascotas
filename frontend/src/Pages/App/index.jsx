//Importando paquetes para navegar.
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Importando contexto de usuario.
import { AuthProvider } from "../../Context/AuthContext.jsx";

//Importando contextos.
import { TaskProvider } from "../../Context/TasksContext.jsx";
import { PetProvider } from '../../Context/PetsContext';
import { ReservationProvider } from '../../Context/ReservationsContext';

//Importando las paginas.
import Home from "../Home";
import NotFound from "../NotFound";
import LogIn from "../LogIn";
import TaskPage from "../Task";
import TaskFormPage from "../TaskForm";
import Api from "../Api";
import Register from "../Register";
import ProfilePage from "../Profile";
import PetList from "../Pets/PetList";

//Importando los componentes.
import NavBar from "../../Components/NavBar";

//Importando protección de rutas.
import ProtectedRoute from "../../Components/ProtectedRoute/index.jsx";

const App = () => {
  return (
    <ReservationProvider>
    <PetProvider>
    <AuthProvider>
    <TaskProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/register" element={<Register />} />
              <Route path="/api" element={<Api />} />
              <Route path="*" element={<NotFound />} />

              {/* Estas rutas solo se acceden con el usiario registrado */}

              <Route element={<ProtectedRoute />}>
                <Route path="/user/pets" element={<PetList />} />
                <Route path="/tasks" element={<TaskPage />} />
                <Route path="/add-task" element={<TaskFormPage />} />
                <Route path="/tasks/:id" element={<TaskFormPage />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Route>

            </Routes>
            <NavBar />
          </BrowserRouter>
    </TaskProvider>
    </AuthProvider>
    </PetProvider>
    </ReservationProvider>
  );
};

export default App;
