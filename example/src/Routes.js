
import { Routes, Route } from 'react-router-dom';
import App from './components/App';
import Readme from './Readme';
import NavbarDoc from './components/NavbarDoc';

export default Routes = (
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<Readme />} />
      <Route path="navbar" element={<NavbarDoc />} />
      <Route path="home2" element={<Readme />} />
    </Route>
  </Routes>
);