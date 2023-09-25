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
import { UseTrainingContext } from './hooks/UseTrainingContext';
import { LockAcess } from './components/LockAcess/LockAcess';

function App() {
  const {authenticated} = UseTrainingContext();
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Message/>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/profile" element={authenticated ? <Profile/> : <LockAcess/>} />
          <Route path="/diet" element={authenticated? <Dieta/> : <LockAcess/>} />
          <Route path="/training" element={authenticated ? <Training/> : <LockAcess/>} />
          <Route path="/training/:id" element={authenticated ? <DetailTraining/> : <LockAcess/>} />
          <Route path="/create" element={authenticated ? <AddTraining/> : <LockAcess/>} />
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
