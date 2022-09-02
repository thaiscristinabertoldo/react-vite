import { Route, Routes } from 'react-router-dom';

import { About, Home } from '../pages';

export const Router = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
  </Routes>
);
