import { useNavigate } from 'react-router-dom'

import './navButton.css'

const NavButton = ({nav}) => {
  const navigate = useNavigate()

  const active = window.location.pathname === nav.link ? 'active' : '';
  
  return (
    <div
      onClick={() => {
        navigate(`${nav.link}`);
      }}
      className={`nav-button ${active}`}
    >
      {nav.title}
    </div>
  )
}

export default NavButton