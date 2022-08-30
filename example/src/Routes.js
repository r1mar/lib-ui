
import { Routes, Route } from 'react-router-dom';
import App from './components/App';
import Breadcrumb from './components/breadcrumb/BreadCrumbDoc';
import BreadcrumbItem from './components/breadcrumb/BreadcrumbItem';
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
import Sidebar from './components/sidebar/SidebarDoc';
import SidebarNav from './components/sidebar/SidebarNavDoc';
import Textbox from './components/TextboxDoc';

export default (
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<Readme />} />
      <Route path="button" element={<Button />} />
      <Route path="breadcrumb" element={<Breadcrumb />} />
      <Route path="breadcrumb/item" element={<BreadcrumbItem />} />
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
      <Route path="sidebar" element={<Sidebar />} />
      <Route path="sidebar/nav" element={<SidebarNav />} />
      <Route path="textbox" element={<Textbox />} />
    </Route>
  </Routes>
);

