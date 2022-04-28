import 'bootstrap-scss/bootstrap.scss';
import { InlineForm, i18n, Navbar, NavbarAction, NavbarAnchor, NavbarNav, NavbarDropdown, 
  NavbarLink } from 'rm-lib-ui';

import { I18nextProvider } from "react-i18next";

import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  const [actionActive, setActionActive] = useState(false);

  return (
    <I18nextProvider i18n={i18n}>
      <Navbar brand="Navbar" color='dark' backgroundColor="light" breakpoint="lg" >
        <NavbarNav>
          <NavbarLink to="/home1">Link</NavbarLink>
          <NavbarAction onClick={() => setActionActive(!actionActive)} active={actionActive}>Action</NavbarAction>
          <NavbarAnchor href="/">Home</NavbarAnchor>
          <NavbarDropdown caption="Dropdown" />
          <NavbarLink to="/home2" disabled={true}>Disabled</NavbarLink>
        </NavbarNav>
        <InlineForm />
      </Navbar>
      <Outlet />
    </I18nextProvider>
  );
}

export default App;
