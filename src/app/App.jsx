import {
  BrowserRouter, Navigate, Route, Routes,
} from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
