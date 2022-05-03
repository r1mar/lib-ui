import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  InlineForm, Navbar, NavAction, NavAnchor, NavbarNav, NavDropdown,
  NavLink, DropdownAction, DropdownAnchor, DropdownHeader, DropdownDivider, DropdownLink, Textbox, Button
} from 'rm-lib-ui';


export default function NavbarDoc(props) {
  const [navbarActionActive, setNavActionActive] = useState(false);
  const [dropdownActionActive, setDropdownActionActive] = useState(false);
  const importStatement = "import { Navbar } from 'rm-lib-ui';";

  return (
    <div>
      <Link to="/">back to Readme</Link>
      <hr />
      <h1>Navbar</h1>
      <code>{importStatement}</code>
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
    </div>
  );
}