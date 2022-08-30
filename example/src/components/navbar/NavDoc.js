import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  NavbarNav, NavAction, NavAnchor, NavDropdown, NavLink, Navbar, DropdownAction,
  Breadcrumb, BreadcrumbItem, Code
} from 'rm-lib-ui';
import References from '../Referenzes';
import PropertiesTable from '../PropertiesTable';

export default function NavDoc(props) {
  const [actionActive, setActionActive] = useState(false);

  const rows = [[
    'children', 'Array<NavAction | NavAnchor | NavDropdown | NavLink>', 'yes', null, null, null
  ]];

  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem><Link to="/">Readme</Link></BreadcrumbItem>
        <BreadcrumbItem><Link to="/navbar">Navbar</Link></BreadcrumbItem>
        <BreadcrumbItem active="true">Nav</BreadcrumbItem>
      </Breadcrumb>

      <h1>NavbarNav</h1>
      <p>NavbarNav is subitem of Navbar and supports same children as Nav</p>
      <Navbar>
        <NavbarNav >
          <NavAction onClick={() => setActionActive(!actionActive)} active={actionActive}>Action</NavAction>
          <NavAnchor id="anchor2" href="#">Anchor</NavAnchor>
          <NavDropdown caption="NavDropdown">
            <DropdownAction onClick={() => setActionActive(!actionActive)} active={actionActive}>Action</DropdownAction>
          </NavDropdown>
          <NavLink to="#">Link</NavLink>
        </NavbarNav>
      </Navbar>

      <h2>Properties</h2>
      <PropertiesTable caption="Properties of Navbar" rows={rows} />
      <p>Nav supports all native properties of html tag <Code inline={true}>{'<ul>'}</Code></p>

      <h2>Code</h2>
      <Code>{`import { Nav, NavAction, NavAnchor, NavLink, NavDropdown, DropdownAction } from 'rm-lib-ui';
...
<Navbar>
  <NavbarNav>
    <NavAction onClick={() => setActionActive(!navActionActive)} active={actionActive}>Action</NavAction>
    <NavAnchor id="anchor2" href="#">Anchor</NavAnchor>
    <NavDropdown>
      <DropdownAction onClick={() => setActionActive(!navActionActive)} 
        active={actionActive}>Action</DropdownAction>
    </NavDropdown>
    <NavLink to="#">Link</NavLink>
  </NavbarNav>
</Navbar>`}
      </Code>

      <References>
        <NavLink to="/nav/action">NavAction</NavLink>
        <NavLink to="/nav/anchor">NavAnchor</NavLink>
        <NavLink to="/nav/dropdown">NavDropdown</NavLink>
        <NavLink to="/nav/link">NavLink</NavLink>
      </References>
    </div>
  );
}