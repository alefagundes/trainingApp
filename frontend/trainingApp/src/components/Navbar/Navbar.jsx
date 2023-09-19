import style from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import { GiWeightLiftingUp } from 'react-icons/gi';
import {BiLogInCircle, BiLogOutCircle} from 'react-icons/bi'
import {MdAppRegistration} from 'react-icons/md'
import { UseTrainingContext } from '../../hooks/UseTrainingContext';

export const Navbar = () => {
  const { authenticated, logout } = UseTrainingContext();

  return (
    <nav className={style.navbar}>
      <Link className={style.logoNav} to={'/'}><GiWeightLiftingUp />
        Training<span>App</span>
      </Link>
      <ul>
        {authenticated ? (
          <>
            <Link to={'/'} onClick={() => logout()}><BiLogOutCircle/></Link>
          </>
        ): <>
          <Link to={'/login'}><BiLogInCircle/></Link>
          <Link to={'/register'}><MdAppRegistration/></Link>
        </>}
      </ul>
    </nav>
  );
};
