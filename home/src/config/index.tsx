import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Games from '../views/Games'

import Home from '../views/Home'

export const Nav = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
      </Routes>
    </Router>
  )
}
