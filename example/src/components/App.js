import 'rm-lib-ui/dist/themes/index.scss';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { i18n, Navbar, NavbarNav, Sidebar, SidebarNav } from 'rm-lib-ui';
import { I18nextProvider } from "react-i18next";
import COMPONENTLIST from './ComponentList';

function App() {

  return (
    <I18nextProvider i18n={i18n}>
      <Navbar brand="Readme" color="light" backgroundColor="dark">
        <NavbarNav className="d-flex d-xl-none">
          {COMPONENTLIST.props.children}
        </NavbarNav>
      </Navbar>
      <div className='container-fluid'>
        <div className='row'>
          <Sidebar className="col-xl-2 d-none d-xl-block">
            <SidebarNav>
              {COMPONENTLIST.props.children}
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
