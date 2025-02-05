import React from 'react'
import Home from './pages/Home';
import Result from './pages/Result';
import BuyCredit from './pages/BuyCredit';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className='px-4  sm:px-10 md:-14 lg:px-28 min-h-screen'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buy-credit" element={<BuyCredit />} />
      </Routes>
    </div>
  )
}

export default App;