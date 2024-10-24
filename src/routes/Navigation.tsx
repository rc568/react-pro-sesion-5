import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate
} from 'react-router-dom';

import styles from './Navigation.module.css'

import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className={styles['main-layout']}>
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/" className={({isActive}) => isActive ? styles['nav-active'] : '' } >Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({isActive}) => isActive ? styles['nav-active'] : '' } >About</NavLink>
            </li>
            <li>
              <NavLink to="/users" className={({isActive}) => isActive ? styles['nav-active'] : '' } >Users</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/users" element={<h1>Users Page</h1>}/>
          <Route path="/" element={<h1>Home Page</h1>}/>
          <Route path='/*' element={<Navigate to="/home" replace/> }/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}