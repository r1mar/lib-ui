import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  NavbarNav, NavAction, NavAnchor, NavDropdown, NavLink, Navbar, DropdownAction,
  Breadcrumb, BreadcrumbItem, Code, Nav, Table, TableHeader, TableCell, TableRow, TableHeaderCell
} from 'rm-lib-ui';


export default function NavDoc(props) {
  const [actionActive, setActionActive] = useState(false);

  return (
    <div>
      <Breadcrumb divider="/">
        <BreadcrumbItem><Link to="/">Readme</Link></BreadcrumbItem>
        <BreadcrumbItem><Link to="/navbar">Navbar</Link></BreadcrumbItem>
        <BreadcrumbItem active="true">Nav</BreadcrumbItem>
      </Breadcrumb>
      <div className='container-md'>
        <div className='row'>
          <div className='col'>
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
            <Table caption="Properties of Navbar">
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
                  <TableCell>children</TableCell>
                  <TableCell>{'Array<NavAction | NavAnchor | NavDropdown | NavLink>'}</TableCell>
                  <TableCell>yes</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell />
                </TableRow>
              </tbody>
            </Table>
            <p>Nav supports all native properties of html tag <Code inline={true}>{'<ul>'}</Code></p>

            <h2>Code</h2>
            <Code>{`import { Nav, NavAction, NavAnchor, NavLink, NavDropdown, DropdownAction } from 'rm-lib-ui';
...
<Navbar>
  <NavbarNav>
    <NavAction onClick={() => setActionActive(!navActionActive)} active={actionActive}>Action</NavAction>
    <NavAnchor id="anchor2" href="#">Anchor</NavAnchor>
    <NavDropdown>
      <DropdownAction onClick={() => setActionActive(!navActionActive)} active={actionActive}>Action</DropdownAction>
    </NavDropdown>
    <NavLink to="#">Link</NavLink>
  </NavbarNav>
</Navbar>`}
            </Code>

            <h2>References</h2>
            <Nav breakAt="allways">
              <NavLink to="/nav">Nav</NavLink>
            </Nav>
          </div>
        </div>
      </div>
    </div>
  );
}