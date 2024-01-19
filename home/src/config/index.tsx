import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Games from '../views/Games'

import Home from '../views/Home'
import StartGames from '../views/Games/startgame'
import TopGames from '../views/Games/Topgame'
import MyLocation from '../views/Games/My Location'
import PageNotFound from '../views/NotFound'

export const Nav = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/startgames" element={<StartGames />} />
        <Route path="/topgames" element={<TopGames />} />
        <Route path="/my-location" element={<MyLocation />} />
        <Route path="/erro" element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}
