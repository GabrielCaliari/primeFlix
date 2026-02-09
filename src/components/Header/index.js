import './header.css'
import { Link } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'

function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header>
      <Link className="logo" to="/">Prime Flix</Link>
      <nav className="header-nav">
        <Link className="header-link" to="/busca">Buscar</Link>
        <Link className="favoritos" to="/favoritos">Meus filmes</Link>
        <button type="button" className="theme-toggle" onClick={toggleTheme} title={theme === 'dark' ? 'Modo claro' : 'Modo escuro'} aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}>
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </nav>
    </header>
  )
}

export default Header