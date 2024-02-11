import {
  BrowserRouter, Navigate, Route, Routes,
} from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import BendingArena from '../pages/BendingArena';
import Labyrinth3 from '../pages/Labyrinth3';
import FatesReloaded from '../pages/FatesReloaded';
import ScrollToTop from '../hooks/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="/item1" element={<BendingArena />} />
          <Route path="/item2" element={<Labyrinth3 />} />
          <Route path="/item3" element={<FatesReloaded />} />
          <Route path="not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
