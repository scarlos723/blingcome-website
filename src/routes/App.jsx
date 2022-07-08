
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BlingcomeTemplate from '@/containers/BlingcomeTemplate'
import AboutUs from '@/pages/AboutUs'
import Benefits from '@/pages/Benefits'
import Home from '@/pages/Home'
import Tokenomics from '@/pages/Tokenomics'
import '@/styles/App.css'
import OurTeam from '@/pages/OurTeam'
import BuyNow from '@/pages/BuyNow'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BlingcomeTemplate />}>
          <Route index element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/tokenomics' element={<Tokenomics />} />
          <Route path='/benefits' element={<Benefits />} />
          <Route path='/our-team' element={<OurTeam />} />
          <Route path='/buy-now' element={<BuyNow />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
