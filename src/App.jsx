import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import './assets/styles/main.scss'
import { Home } from './pages/Home'
import { AppHeader } from './cmps/AppHeader'

export function App() {
  return (
    <Router>
      <div className='app-container'>
        <AppHeader />
        <Routes>
          <Route element={<Home />} path='/'></Route>
        </Routes>
      </div>
    </Router>
  )
}
