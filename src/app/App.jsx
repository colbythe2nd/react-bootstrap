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
import AboutMe from '../pages/AboutMe';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="/bending" element={<BendingArena />} />
          <Route path="/labyrinth" element={<Labyrinth3 />} />
          <Route path="/fates" element={<FatesReloaded />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
