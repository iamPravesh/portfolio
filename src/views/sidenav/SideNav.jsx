import NavButton from '../../components/navButton/NavButton';

import { navs } from './navs';

import './sidenav.css';

const SideNav = () => {
  return (
    <div className="sidenav-container">
      {navs.map((nav, index) => (
        <NavButton key={index} nav={nav} />
      ))}
    </div>
  )
}

export default SideNav