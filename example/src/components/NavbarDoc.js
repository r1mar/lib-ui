import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  InlineForm, Navbar, NavAction, NavAnchor, NavbarNav, NavDropdown,
  NavLink, DropdownAction, DropdownAnchor, DropdownHeader, DropdownDivider, DropdownLink, Textbox, Button,
  Breadcrumb, BreadcrumbItem, Code
} from 'rm-lib-ui';


export default function NavbarDoc(props) {
  const [navbarActionActive, setNavActionActive] = useState(false);
  const [dropdownActionActive, setDropdownActionActive] = useState(false);
  const [color, setColor] = useState('dark');
  const [backgroundColor, setBackgroundColor] = useState('light');
  const [breakpoint, setBreakpoint] = useState('lg');

  const example = `import { Navbar } from 'rm-lib-ui';
...
<Navbar brand="Navbar" color="${color}" backgroundColor="${backgroundColor}" breakpoint="${breakpoint}" >
  <NavbarNav>
    <NavLink to="#">Link</NavLink>
    <NavAction onClick={() => setNavActionActive(!navbarActionActive)} active={navbarActionActive}>Action</NavAction>
    <NavAnchor id="anchor1" href="#anchor1">Anchor</NavAnchor>
    <NavDropdown caption="Dropdown">
      <DropdownHeader>Header</DropdownHeader>
      <DropdownAction onClick={() => setDropdownActionActive(!dropdownActionActive)} active={dropdownActionActive}>Action</DropdownAction>
      <DropdownAnchor id="anchor2" href="#">Anchor</DropdownAnchor>
      <DropdownDivider />
      <DropdownLink to="#">Link</DropdownLink>
    </NavDropdown>
  </NavbarNav>
  <InlineForm className="my-2 my-lg-0">
    <Textbox className="mr-sm-2" type="search" placeholder="Search" ariaLabel="Search" />
    <Button className="my-2 my-sm-0" type="submit" outlineColor="success" onClick={() => { }}>Search</Button>
  </InlineForm>
</Navbar>`;

  return (
    <div>
      <Breadcrumb divider="/">
        <BreadcrumbItem><Link to="/">Readme</Link></BreadcrumbItem>
        <BreadcrumbItem active="true">Navbar</BreadcrumbItem>
      </Breadcrumb>
      <h1>Navbar</h1>
      <p>Responsive navigation bar</p>
      <Navbar brand="Navbar" color='dark' backgroundColor="light" breakpoint="lg" >
        <NavbarNav>
          <NavLink to="#">Link</NavLink>
          <NavAction onClick={() => setNavActionActive(!navbarActionActive)} active={navbarActionActive}>Action</NavAction>
          <NavAnchor id="anchor1" href="#anchor1">Anchor</NavAnchor>
          <NavDropdown caption="Dropdown">
            <DropdownHeader>Header</DropdownHeader>
            <DropdownAction onClick={() => setDropdownActionActive(!dropdownActionActive)} active={dropdownActionActive}>Action</DropdownAction>
            <DropdownAnchor id="anchor2" href="#">Anchor</DropdownAnchor>
            <DropdownDivider />
            <DropdownLink to="#">Link</DropdownLink>
          </NavDropdown>
        </NavbarNav>
        <InlineForm className="my-2 my-lg-0">
          <Textbox className="mr-sm-2" type="search" placeholder="Search" ariaLabel="Search" />
          <Button className="my-2 my-sm-0" type="submit" outlineColor="success" onClick={() => { }}>Search</Button>
        </InlineForm>
      </Navbar>
      <h2>Code</h2>
      <div className='highlight'>
      <Code>
{example}
      </Code>
      </div>
    </div>
  );
}