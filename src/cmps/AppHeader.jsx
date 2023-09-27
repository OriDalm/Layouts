import { Link, NavLink } from 'react-router-dom'
import logoUrl from '../assets/imgs/logo.svg'
export function AppHeader() {
  return (
    <header className='app-header'>
      <div className='links-container'>
        <Link className='logo' to='/'>
          <img src={logoUrl} />
        </Link>
        <nav className='nav-links'>
          <NavLink to='/home'>home</NavLink>
          <NavLink to='/about'>about</NavLink>
          <button className='contact-us'>contact us</button>
        </nav>
      </div>
    </header>
  )
}
