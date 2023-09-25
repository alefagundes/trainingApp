import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import {Message} from './components/Message/Message'
import {Dashboard} from './pages/dashboard/dashboard'
import { NotFound } from './pages/404/404';
import { Profile } from './pages/Profile/Profile';
import { Training } from './pages/Training/Training';
import { Dieta } from './pages/Dieta/Dieta';
import { AddTraining } from './pages/AddTraining/AddTraining';
import { PersonTrainingLogin } from './pages/PersonTrainingLogin/PersonTrainingLogin';
import { DetailTraining } from './pages/DetailTraining/DetailTraining';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Message/>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/diet" element={<Dieta/>} />
          <Route path="/training" element={<Training/>} />
          <Route path="/training/:id" element={<DetailTraining/>} />
          <Route path="/create" element={<AddTraining/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/login/teacher" element={<PersonTrainingLogin/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
