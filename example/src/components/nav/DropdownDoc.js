import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  NavDropdown, NavLink, DropdownAction, DropdownAnchor, DropdownHeader, DropdownDivider, DropdownLink, Textbox, 
  Breadcrumb, BreadcrumbItem, Code, Table, TableHeader, TableHeaderCell, TableRow, TableCell, Nav
} from 'rm-lib-ui';


export default function NavDropdownDoc(props) {
  const [dropdownActionActive, setDropdownActionActive] = useState(false);
  const [caption, setCaption] = useState('Example');

  return (
    <div>
      <Breadcrumb divider="/">
        <BreadcrumbItem><Link to="/">Readme</Link></BreadcrumbItem>
        <BreadcrumbItem><Link to="/nav">Nav</Link></BreadcrumbItem>
        <BreadcrumbItem active="true">NavDropdown</BreadcrumbItem>
      </Breadcrumb>
      <div className='container-md'>
        <div className='row'>
          <div className='col'>
            <h1>NavDropdown</h1>
            <p>NavDropdown</p>
            <Nav>
            <NavDropdown caption={caption} >
              <DropdownHeader>Header</DropdownHeader>
              <DropdownAction onClick={() => setDropdownActionActive(!dropdownActionActive)} active={dropdownActionActive}>Action</DropdownAction>
              <DropdownAnchor id="anchor2" href="#">Anchor</DropdownAnchor>
              <DropdownDivider />
              <DropdownLink to="#">Link</DropdownLink>
            </NavDropdown>
            </Nav>

            <h2>Properties</h2>
            <Table caption="Properties of NavDropdown">
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
                  <TableCell>caption</TableCell>
                  <TableCell>string</TableCell>
                  <TableCell>yes</TableCell>
                  <TableCell></TableCell>
                  <TableCell><Textbox value={caption} onChange={e => setCaption(e.target.value)} /></TableCell>
                  <TableCell>text for caption</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>children</TableCell>
                  <TableCell>{'Array<DropdownHeader | DropdownAction | DropdownAnchor | DropdownDivider | DropdownLink>'}</TableCell>
                  <TableCell>yes</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell />
                </TableRow>
              </tbody>
            </Table>
            <p>Dropdown supports all native properties of html tag <Code inline={true}>{'<li>'}</Code></p>

            <h2>Code</h2>
            <Code>{`import { NavDropdown, DropdownHeader, DropdownAction, DropdownAnchor, DropdownLink, DropdownDivider, Nav } from 'rm-lib-ui';
...
<Nav>
  <NavDropdown caption="${caption}" >
    <DropdownHeader>Header</DropdownHeader>
    <DropdownAction onClick={() => setDropdownActionActive(!dropdownActionActive)} active={dropdownActionActive}>Action</DropdownAction>
    <DropdownAnchor id="anchor2" href="#">Anchor</DropdownAnchor>
    <DropdownDivider />
    <DropdownLink to="#">Link</DropdownLink>
  </NavDropdown>
</Nav>`}
            </Code>

            <h2>References</h2>
            <Nav breakAt="allways">
              <NavLink to="/nav">Nav</NavLink>
              <NavLink to="/dropdown/header">DropdownHeader</NavLink>
              <NavLink to="/dropdown/action">DropdownAction</NavLink>
              <NavLink to="/dropdown/anchor">DropdownAnchor</NavLink>
              <NavLink to="/dropdown/divider">DropdownDivider</NavLink>
              <NavLink to="/dropdown/link">DropdownLink</NavLink>
            </Nav>
          </div>
        </div>
      </div>
    </div>
  );
}