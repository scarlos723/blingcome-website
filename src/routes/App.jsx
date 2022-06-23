import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BlingcomeTemplate from '../containers/BlingcomeTemplate'
import Home from '../pages/Home'
import '../styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BlingcomeTemplate></BlingcomeTemplate>}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
