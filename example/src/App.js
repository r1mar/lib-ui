import 'bootstrap-scss/bootstrap.scss';
import { InlineForm, i18n, Navbar, NavbarAction, NavbarAnchor, NavbarNav, NavbarDropdown, 
  NavbarLink, DropdownAction, DropdownAnchor } from 'rm-lib-ui';

import { I18nextProvider } from "react-i18next";

import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  const [navbarActionActive, setNavbarActionActive] = useState(false);
  const [dropdownActionActive, setDropdownActionActive] = useState(false);

  return (
    <I18nextProvider i18n={i18n}>
      <Navbar brand="Navbar" color='dark' backgroundColor="light" breakpoint="lg" >
        <NavbarNav>
          <NavbarLink to="/home1">Link</NavbarLink>
          <NavbarAction onClick={() => setNavbarActionActive(!navbarActionActive)} active={navbarActionActive}>Action</NavbarAction>
          <NavbarAnchor href="/">Home</NavbarAnchor>
          <NavbarDropdown caption="Dropdown">
            <DropdownAction onClick={() => setDropdownActionActive(!dropdownActionActive)} active={dropdownActionActive}>Action</DropdownAction>
            <DropdownAnchor href="/">Home</DropdownAnchor>
            <DropdownAction onClick={()=>{}} disabled={true} />
          </NavbarDropdown>
          <NavbarLink to="/home2" disabled={true}>Disabled</NavbarLink>
        </NavbarNav>
        <InlineForm />
      </Navbar>
      <Outlet />
    </I18nextProvider>
  );
}

export default App;
