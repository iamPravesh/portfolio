import './header.css'

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Pravesh Niroula</h1>
      <div
        className='happy-emoji'
      >
        <span role="img" aria-label="happy-emoji">😊</span>
      </div>
      <p 
        className="header__description"
      >
        I am Web Developer
      </p>
    </header>
  )
}

export default Header