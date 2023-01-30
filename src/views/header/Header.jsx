import { useState, useEffect, useMemo } from 'react'
import './header.css'

const Header = () => {
// wrap initialization of paragraphs in useMemo
  const paragraphs = useMemo(() => [
    'I am Web Developer',
    'I like to code',
    'I am a Full Stack Developer',
    'I am a Front End Developer',
    'I am a Back End Developer',
    'I am a MERN Stack Developer',
    'I like to play football',
    'I love one piece',
  ], [])

  const [paragraph, setParagraph] = useState(paragraphs[0])

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * paragraphs.length)
      setParagraph(paragraphs[randomIndex])
    }, 3000)

    return () => clearInterval(interval)
  }, [paragraphs])

  return (
    <header className="header">
      <h1 className="header__title">Pravesh Niroula</h1>
      <p 
        className="header__description"
      >
        {paragraph}
      </p>
    </header>
  )
}

export default Header