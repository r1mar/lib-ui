import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  NavDropdown, NavLink, DropdownAction, DropdownAnchor, DropdownHeader, DropdownDivider, DropdownLink, Textbox,
  Breadcrumb, BreadcrumbItem, Code, Nav, Select
} from 'rm-lib-ui';
import PropertiesTable from '../PropertiesTable';


export default function NavDropdownDoc(props) {
  const [dropdownActionActive, setDropdownActionActive] = useState(false);
  const [caption, setCaption] = useState('Example');
  const [color, setColor] = useState(null);

  const colors = [null,'primary','secondary','success','info','danger','warning','light','dark','body','muted',
                  'white','black-50','white-50'];

  const rows = [[
    'caption', 'string', 'yes', null, <Textbox value={caption} onChange={e => setCaption(e.target.value)} />, 'text for caption'
  ], [
    'color', colors.slice(1).reduce((previous, current) => current ? `${previous} | ${current}` : previous), 'yes', null,
    <Select onChange={e => setColor(e.target.value)} value={color}>
      {colors.map(item => (<option key={item} >{item}</option>))}
    </Select>, 'set text color'
  ], [
    'children', 'Array<DropdownHeader | DropdownAction | DropdownAnchor | DropdownDivider | DropdownLink>', 'yes', null, null, null
  ]];

  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem><Link to="/">Readme</Link></BreadcrumbItem>
        <BreadcrumbItem><Link to="/nav">Nav</Link></BreadcrumbItem>
        <BreadcrumbItem active="true">NavDropdown</BreadcrumbItem>
      </Breadcrumb>

      <h1>NavDropdown</h1>
      <p>NavDropdown</p>
      <Nav>
        <NavDropdown caption={caption} color={color} >
          <DropdownHeader>Header</DropdownHeader>
          <DropdownAction onClick={() => setDropdownActionActive(!dropdownActionActive)} active={dropdownActionActive}>Action</DropdownAction>
          <DropdownAnchor id="anchor2" href="#">Anchor</DropdownAnchor>
          <DropdownDivider />
          <DropdownLink to="#">Link</DropdownLink>
        </NavDropdown>
      </Nav>

      <h2>Properties</h2>
      <PropertiesTable caption="Properties of NavDropdown" rows={rows} />
      <p>Dropdown supports all native properties of html tag <Code inline={true}>{'<li>'}</Code></p>

      <h2>Code</h2>
      <Code>{`import { NavDropdown, DropdownHeader, DropdownAction, DropdownAnchor, DropdownLink, 
  DropdownDivider, Nav } from 'rm-lib-ui';
...
<Nav>
  <NavDropdown caption="${caption}" color="${color}" >
    <DropdownHeader>Header</DropdownHeader>
    <DropdownAction onClick={() => setDropdownActionActive(!dropdownActionActive)} 
      active={dropdownActionActive}>Action</DropdownAction>
    <DropdownAnchor id="anchor2" href="#">Anchor</DropdownAnchor>
    <DropdownDivider />
    <DropdownLink to="#">Link</DropdownLink>
  </NavDropdown>
</Nav>`}
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
  );
}