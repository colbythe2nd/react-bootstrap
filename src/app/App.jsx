import {
  BrowserRouter, Navigate, Route, Routes,
} from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Item1Page from '../pages/Item1Page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="/item1" element={<Item1Page />} />
          <Route path="not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
