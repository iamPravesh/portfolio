import ConnectionButton from '../../components/connectionButton/ConnectionButton'
import { connections } from './connectionData'

import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">
        <span role="img" aria-label="connection-emoji">🤝</span>
      </p>
      <div className="footer__connection">
        {
          connections.map((connection, index) => {
            return (
              <ConnectionButton
                key={index}
                connection={connection}
              />
            )
          })
        }
      </div>
    </footer>
  )
}

export default Footer