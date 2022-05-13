import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Dropdown, NavLink, DropdownAction, DropdownAnchor, DropdownHeader, DropdownDivider, DropdownLink, Textbox, 
  Breadcrumb, BreadcrumbItem, Code, Table, TableHeader, TableHeaderCell, TableRow, TableCell, Select, Nav
} from 'rm-lib-ui';


export default function DropdownDoc(props) {
  const [dropdownActionActive, setDropdownActionActive] = useState(false);

  const [color, setColor] = useState('');
  const [caption, setCaption] = useState('Example');

  const colors = ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'dark', 'light', 'link', ''];
  const example = `import { Dropdown, DropdownHeader, DropdownAction, DropdownAnchor, DropdownLink, DropdownDivider } from 'rm-lib-ui';
...
<Dropdown caption="${caption}" color="${color}" >
  <DropdownHeader>Header</DropdownHeader>
  <DropdownAction onClick={() => setDropdownActionActive(!dropdownActionActive)} active={dropdownActionActive}>Action</DropdownAction>
  <DropdownAnchor id="anchor2" href="#">Anchor</DropdownAnchor>
  <DropdownDivider />
  <DropdownLink to="#">Link</DropdownLink>
</Dropdown>`;

  return (
    <div>
      <Breadcrumb divider="/">
        <BreadcrumbItem><Link to="/">Readme</Link></BreadcrumbItem>
        <BreadcrumbItem active="true">Dropdown</BreadcrumbItem>
      </Breadcrumb>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h1>Dropdown</h1>
            <p>Dropdown</p>
            <Dropdown caption={caption} color={color} >
              <DropdownHeader>Header</DropdownHeader>
              <DropdownAction onClick={() => setDropdownActionActive(!dropdownActionActive)} active={dropdownActionActive}>Action</DropdownAction>
              <DropdownAnchor id="anchor2" href="#">Anchor</DropdownAnchor>
              <DropdownDivider />
              <DropdownLink to="#">Link</DropdownLink>
            </Dropdown>

            <h2>Properties</h2>
            <Table caption="Properties of Dropdown">
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
                  <TableCell>color</TableCell>
                  <TableCell>{colors.reduce((previous, current) => current ? `${previous} | ${current}` : previous)}</TableCell>
                  <TableCell>yes</TableCell>
                  <TableCell></TableCell>
                  <TableCell>
                    <Select onChange={e => setColor(e.target.value)} value={color}>
                      {colors.map(colorItem => (<option key={colorItem} >{colorItem}</option>))}
                    </Select>
                  </TableCell>
                  <TableCell>fill color</TableCell>
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
            <p>Dropdown supports all native properties of html tag <Code inline={true}>{'<div>'}</Code></p>

            <h2>Code</h2>
            <Code>
              {example}
            </Code>

            <h2>References</h2>
            <Nav breakAt="allways">
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