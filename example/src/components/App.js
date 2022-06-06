import 'rm-lib-ui/dist/themes/index.scss';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { i18n, Navbar, NavLink, NavbarNav, Sidebar, SidebarNav } from 'rm-lib-ui';

import { I18nextProvider } from "react-i18next";

function App() {

  const menuItems = (<>
    <NavLink to="/dropdown" className="d-block">Dropdown</NavLink>
    <NavLink to="/inline-form" className="d-block">InlineForm</NavLink>
    <NavLink to="/nav" className="d-block">Nav</NavLink>
    <NavLink to="/navbar" className="d-block">Navbar</NavLink>
    <NavLink to="/sidebar" className="d-block">Sidebar</NavLink>
    <NavLink to="/textbox" className="d-block">Textbox</NavLink>
  </>);

  return (
    <I18nextProvider i18n={i18n}>
      <Navbar brand={'rm-lib-ui'} color="light" backgroundColor="dark">
        <NavbarNav className="d-flex d-xl-none">
          {menuItems.props.children}
        </NavbarNav>
      </Navbar>
      <div className='container-fluid'>
        <div className='row'>
          <Sidebar className="col-xl-2 d-none d-xl-block">
            <SidebarNav>
              {menuItems.props.children}
            </SidebarNav>
          </Sidebar>
          <div className='col'>
            <Outlet />
          </div>
        </div>
      </div>
    </I18nextProvider >
  );
}

export default App;
