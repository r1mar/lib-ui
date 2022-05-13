import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  InlineForm, Navbar, NavAction, NavAnchor, NavbarNav, NavDropdown,
  NavLink, DropdownAction, DropdownAnchor, DropdownHeader, DropdownDivider, DropdownLink, Textbox, Button,
  Breadcrumb, BreadcrumbItem, Code, Table, TableHeader, TableHeaderCell, TableRow, TableCell, Select, Nav
} from 'rm-lib-ui';


export default function NavbarDoc(props) {
  const [navbarActionActive, setNavActionActive] = useState(false);
  const [dropdownActionActive, setDropdownActionActive] = useState(false);

  const [color, setColor] = useState('dark');
  const [backgroundColor, setBackgroundColor] = useState('light');
  const [breakpoint, setBreakpoint] = useState('lg');
  const [brand, setBrand] = useState('Navbar');
  const [position, setPosition] = useState();

  const example = `import { Navbar, NavbarNav, NavLink, NavAction, NavAnchor, NavDropdown, 
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
</Navbar>`;

  return (
    <div>
      <Breadcrumb divider="/">
        <BreadcrumbItem><Link to="/">Readme</Link></BreadcrumbItem>
        <BreadcrumbItem active="true">Navbar</BreadcrumbItem>
      </Breadcrumb>
      <div className='container'>
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
            <Table caption="Properties of Navbar" responsive="xl">
              <TableHeader>
                <TableRow>
                  <TableHeaderCell scope="col">Name</TableHeaderCell>
                  <TableHeaderCell scope="col">Type</TableHeaderCell>
                  <TableHeaderCell scope="col" title="Optional">Opt.</TableHeaderCell>
                  <TableHeaderCell scope="col" title="Default">Def.</TableHeaderCell>
                  <TableHeaderCell scope="col">Value</TableHeaderCell>
                  <TableHeaderCell scope="col">Description</TableHeaderCell>
                </TableRow>
              </TableHeader>
              <tbody>
                <TableRow>
                  <TableCell>brand</TableCell>
                  <TableCell>string | object</TableCell>
                  <TableCell>yes</TableCell>
                  <TableCell></TableCell>
                  <TableCell><Textbox value={brand} onChange={e => setBrand(e.target.value)} /></TableCell>
                  <TableCell>text or any inline-tag for brand</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>color</TableCell>
                  <TableCell>dark | light</TableCell>
                  <TableCell>yes</TableCell>
                  <TableCell>dark</TableCell>
                  <TableCell>
                    <Select onChange={e => setColor(e.target.value)} value={color}>
                      <option key="dark" >dark</option>
                      <option key="light" >light</option>
                    </Select>
                  </TableCell>
                  <TableCell>font color</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>backgroundColor</TableCell>
                  <TableCell>primary | secondary | success | warning | danger | info | dark | light | white</TableCell>
                  <TableCell>yes</TableCell>
                  <TableCell>light</TableCell>
                  <TableCell>
                    <Select onChange={e => setBackgroundColor(e.target.value)} value={backgroundColor}>
                      <option key="primary">primary</option>
                      <option key="secondary">secondary</option>
                      <option key="success">success</option>
                      <option key="warning">warning</option>
                      <option key="danger">danger</option>
                      <option key="info"></option>
                      <option key="dark" >dark</option>
                      <option key="light" >light</option>
                      <option key="white">white</option>
                    </Select>
                  </TableCell>
                  <TableCell />
                </TableRow>
                <TableRow>
                  <TableCell>breakpoint</TableCell>
                  <TableCell>sm | md | lg | xl</TableCell>
                  <TableCell>yes</TableCell>
                  <TableCell>lg</TableCell>
                  <TableCell>
                    <Select onChange={e => setBreakpoint(e.target.value)} value={breakpoint}>
                      <option key="sm">sm</option>
                      <option key="md">md</option>
                      <option key="lg">lg</option>
                      <option key="xl">xl</option>
                    </Select>
                  </TableCell>
                  <TableCell />
                </TableRow>
                <TableRow>
                  <TableCell>position</TableCell>
                  <TableCell>fixed-top | fixed-bottom | sticky-top</TableCell>
                  <TableCell>yes</TableCell>
                  <TableCell></TableCell>
                  <TableCell>
                    <Select onChange={e => setPosition(e.target.value)} value={position}>
                      <option key=""></option>
                      <option key="fixed-top">fixed-top</option>
                      <option key="fixed-bottom">fixed-bottom</option>
                      <option key="sticky-top">sticky-top</option>
                    </Select>
                  </TableCell>
                  <TableCell />
                </TableRow>
                <TableRow>
                  <TableCell>children</TableCell>
                  <TableCell>{'Array<InlineForm | NavbarNav | NavbarText>'}</TableCell>
                  <TableCell>yes</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell />
                </TableRow>
              </tbody>
            </Table>
            <p>Navbar supports all native properties of html tag <Code inline={true}>{'<nav>'}</Code></p>

            <h2>Code</h2>
            <Code>
              {example}
            </Code>

            <h2>References</h2>
            <Nav breakAt="allways">
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