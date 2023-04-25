import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './home'
import { Portifolio } from './portifolio'

function AppRoutes () {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/portifolio" element={<Portifolio />} />
      </Routes>
    </BrowserRouter>
  )
}

export { AppRoutes }
