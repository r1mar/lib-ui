import React, { useState } from 'react';
import {
  InlineForm, Navbar, NavAction, NavAnchor, NavbarNav, NavDropdown,
  NavLink, DropdownAction, DropdownAnchor, DropdownHeader, DropdownDivider, DropdownLink, Textbox, Button
} from 'rm-lib-ui';


export default function NavbarDoc(props) {
  const [navbarActionActive, setNavActionActive] = useState(false);
  const [dropdownActionActive, setDropdownActionActive] = useState(false);

  return (
    <Navbar brand="Navbar" color='dark' backgroundColor="light" breakpoint="lg" >
      <NavbarNav>
        <NavLink to="/navbar">Link</NavLink>
        <NavAction onClick={() => setNavActionActive(!navbarActionActive)} active={navbarActionActive}>Action</NavAction>
        <NavAnchor id="anchor1" href="#anchor1">Anchor</NavAnchor>
        <NavDropdown caption="Dropdown">
          <DropdownHeader>Header</DropdownHeader>
          <DropdownAction onClick={() => setDropdownActionActive(!dropdownActionActive)} active={dropdownActionActive}>Action</DropdownAction>
          <DropdownAnchor id="anchor2" href="#anchor2">Anchor</DropdownAnchor>
          <DropdownDivider />
          <DropdownLink to="/navbar">Link</DropdownLink>
        </NavDropdown>
        <NavLink to="/navbar" disabled={true}>Link</NavLink>
      </NavbarNav>
      <InlineForm className="my-2 my-lg-0">
        <Textbox className="mr-sm-2" type="search" placeholder="Search" ariaLabel="Search" />
        <Button className="my-2 my-sm-0" type="submit" outlineColor="success" onClick={() => { }}>Search</Button>
      </InlineForm>
    </Navbar>
  );
}