import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  InlineForm, Navbar, NavAction, NavAnchor, NavbarNav, NavDropdown,
  NavLink, DropdownAction, DropdownAnchor, DropdownHeader, DropdownDivider, DropdownLink, Textbox, Button,
  Breadcrumb, BreadcrumbItem, Code, Select, Nav
} from 'rm-lib-ui';
import PropertiesTable from '../PropertiesTable';


export default function NavbarDoc(props) {
  const [navbarActionActive, setNavActionActive] = useState(false);
  const [dropdownActionActive, setDropdownActionActive] = useState(false);

  const [color, setColor] = useState('dark');
  const [backgroundColor, setBackgroundColor] = useState('light');
  const [breakpoint, setBreakpoint] = useState('lg');
  const [brand, setBrand] = useState('Navbar');
  const [position, setPosition] = useState();

  const rows = [[
    'brand', 'string | object', 'yes', null,
    <Textbox value={brand} onChange={e => setBrand(e.target.value)} />,
    'text or any inline-tag for brand'
  ], [
    'color', 'dark | light', 'yes', 'dark',
    <Select onChange={e => setColor(e.target.value)} value={color}>
      {['dark', 'light'].map(item => <option key={item} >{item}</option>)}
    </Select>, 'font color'
  ], [
    'backgroundColor', 'primary | secondary | success | warning | danger | info | dark | light | white', 'yes', 'light',
    <Select onChange={e => setBackgroundColor(e.target.value)} value={backgroundColor}>
      {['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'dark', 'light', 'white']
        .map(item => <option key={item} >{item}</option>)}
    </Select>, null
  ], [
    'breakpoint', 'sm | md | lg | xl', 'yes', 'lg',
    <Select onChange={e => setBreakpoint(e.target.value)} value={breakpoint}>
      {['sm', 'md', 'lg', 'xl'].map(item => <option key={item} >{item}</option>)}
    </Select>, null
  ], [
    'position', 'fixed-top | fixed-bottom | sticky-top', 'yes', null,
    <Select onChange={e => setPosition(e.target.value)} value={position}>
      {['', 'fixed-top', 'fixed-bottom', 'sticky-top']
        .map(item => <option key={item} >{item}</option>)}
    </Select>, null
  ], [
    'children', 'Array<InlineForm | NavbarNav | NavbarText>', 'yes', null, null, null
  ]];

  return (
    <div>
      <Breadcrumb divider="/">
        <BreadcrumbItem><Link to="/">Readme</Link></BreadcrumbItem>
        <BreadcrumbItem active="true">Navbar</BreadcrumbItem>
      </Breadcrumb>
      <div className='container-md'>
        <div className='row'>
          <div className='col'>
            <h1>Navbar</h1>
            <p>Responsive navigation bar</p>
            <Navbar brand={brand} color={color} backgroundColor={backgroundColor} breakpoint={breakpoint} position={position} >
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
                <Textbox className="mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <Button className="my-2 my-sm-0" type="submit" outlineColor="success" onClick={() => { }}>Search</Button>
              </InlineForm>
            </Navbar>

            <h2>Properties</h2>
            <PropertiesTable caption="Properties of Navbar" rows={rows} />
            <p>Navbar supports all native properties of html tag <Code inline={true}>{'<nav>'}</Code></p>

            <h2>Code</h2>
            <Code>{`
import { Navbar, NavbarNav, NavLink, NavAction, NavAnchor, NavDropdown, 
  DropdownHeader, DropdownAction, DropdownAnchor, DropdownLink, DropdownDivider,
  InlineForm, Textbox, Button } from 'rm-lib-ui';
...
<Navbar brand="${brand}" color="${color}" backgroundColor="${backgroundColor}" breakpoint="${breakpoint}" position="${position}" >
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
    <Textbox className="mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
    <Button className="my-2 my-sm-0" type="submit" outlineColor="success" onClick={() => { }}>Search</Button>
  </InlineForm>
</Navbar>`}</Code>

            <h2>References</h2>
            <Nav breakAt="allways">
              <NavLink to="/button">Button</NavLink>
              <NavLink to="/inline-form">InlineForm</NavLink>
              <NavLink to="/navbar/nav">NavbarNav</NavLink>
              <NavLink to="/navbar/text">NavbarText</NavLink>
              <NavLink to="/textbox">Textbox</NavLink>
            </Nav>
          </div>
        </div>
      </div>
    </div>
  );
}