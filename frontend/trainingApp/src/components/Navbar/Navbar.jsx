import style from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import { GiWeightLiftingUp, GiMuscleUp } from 'react-icons/gi';
import {BiLogInCircle} from 'react-icons/bi'
import {MdAppRegistration, MdFastfood} from 'react-icons/md'
import {CgProfile} from 'react-icons/cg'
import {FiLogOut} from 'react-icons/fi'
import {AiFillHome} from 'react-icons/ai'
import {IoMdAddCircle} from 'react-icons/io'
import { UseTrainingContext } from '../../hooks/UseTrainingContext';
import {FaUserGraduate} from 'react-icons/fa'

export const Navbar = () => {
  const { authenticated, logout, authPersonal } = UseTrainingContext();

  return (
    <nav className={style.navbar}>
      <Link className={style.logoNav} to={'/'}><GiWeightLiftingUp />
        Training<span>App</span>
      </Link>
      <ul>
        {authPersonal && authenticated ? 
          <>
           <Link to={'/training'}><GiMuscleUp/></Link>
           <Link to={'/create'}><IoMdAddCircle/></Link>
           <Link to={'/diet'}><MdFastfood/></Link>
           <Link to={'/'} onClick={() => logout()}><FiLogOut/></Link>
         </>
        : authenticated && !authPersonal ?  
          <>
            <Link to={'/training'}><GiMuscleUp/></Link>
            <Link to={'/create'}><IoMdAddCircle/></Link>
            <Link to={'/profile'}><CgProfile/></Link>
            <Link to={'/diet'}><MdFastfood/></Link>
            <Link to={'/'} onClick={() => logout()}><FiLogOut/></Link>
         </> : <>
            <Link to={'/'}><AiFillHome/></Link>
            <Link to={'/login'}><BiLogInCircle/></Link>
            <Link to={'/login/teacher'}><FaUserGraduate/></Link>
            <Link to={'/register'}><MdAppRegistration/></Link>
          </>}
      </ul>
    </nav>
  );
};
