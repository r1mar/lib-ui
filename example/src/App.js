import 'bootstrap-scss/bootstrap.scss';
import { InlineForm, i18n, Navbar, NavbarAction, NavbarAnchor, NavbarNav, NavbarDropdown, 
  NavbarLink, DropdownAction, DropdownAnchor, DropdownHeader, DropdownDivider, Textbox, Button } from 'rm-lib-ui';

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
            <DropdownHeader>Header</DropdownHeader>
            <DropdownAction onClick={() => setDropdownActionActive(!dropdownActionActive)} active={dropdownActionActive}>Action</DropdownAction>
            <DropdownAnchor href="/">Home</DropdownAnchor>
            <DropdownDivider />
            <DropdownAction onClick={()=>{}} disabled={true}>Action</DropdownAction>
          </NavbarDropdown>
          <NavbarLink to="/home2" disabled={true}>Disabled</NavbarLink>
        </NavbarNav>
        <InlineForm className="my-2 my-lg-0">
          <Textbox className="mr-sm-2" type="search" placeholder="Search" ariaLabel="Search" />
          <Button className="my-2 my-sm-0" type="submit" outlineColor="success" onClick={()=>{}}>Search</Button>
        </InlineForm>
      </Navbar>
      <Outlet />
    </I18nextProvider>
  );
}

export default App;
