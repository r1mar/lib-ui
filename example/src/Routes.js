
import { Routes, Route } from 'react-router-dom';
import App from './components/App';
import Button from './components/ButtonDoc';
import Dropdown from './components/dropdown/DropdownDoc';
import DropdownAction from './components/dropdown/ActionDoc';
import DropdownAnchor from './components/dropdown/AnchorDoc';
import DropdownDivider from './components/dropdown/DividerDoc';
import DropdownHeader from './components/dropdown/HeaderDoc';
import DropdownLink from './components/dropdown/LinkDoc';
import InlineForm from './components/InlineFormDoc';
import Nav from './components/nav/NavDoc';
import NavAction from './components/nav/ActionDoc';
import NavAnchor from './components/nav/AnchorDoc';
import Navbar from './components/navbar/NavbarDoc';
import NavbarNav from './components/navbar/NavDoc';
import NavbarText from './components/navbar/TextDoc';
import NavLink from './components/nav/LinkDoc';
import NavDropdown from './components/nav/DropdownDoc';
import Readme from './components/Readme';
import Textbox from './components/TextboxDoc';

export default (
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<Readme />} />
      <Route path="button" element={<Button />} />
      <Route path="dropdown" element={<Dropdown />} />
      <Route path="dropdown/action" element={<DropdownAction />} />
      <Route path="dropdown/anchor" element={<DropdownAnchor />} />
      <Route path="dropdown/divider" element={<DropdownDivider />} />
      <Route path="dropdown/header" element={<DropdownHeader />} />
      <Route path="dropdown/link" element={<DropdownLink />} />
      <Route path="inline-form" element={<InlineForm />} />
      <Route path="nav" element={<Nav />} />
      <Route path="nav/action" element={<NavAction />} />
      <Route path="nav/anchor" element={<NavAnchor />} />
      <Route path="nav/dropdown" element={<NavDropdown />} />
      <Route path="nav/link" element={<NavLink />} />
      <Route path="navbar" element={<Navbar />} />
      <Route path="navbar/nav" element={<NavbarNav />} />
      <Route path="navbar/text" element={<NavbarText />} />
      <Route path="textbox" element={<Textbox />} />
    </Route>
  </Routes>
);

