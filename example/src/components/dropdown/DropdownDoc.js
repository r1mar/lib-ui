import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Dropdown, NavLink, DropdownAction, DropdownAnchor, DropdownHeader, DropdownDivider, DropdownLink, Textbox, 
  Breadcrumb, BreadcrumbItem, Code, Select, Nav
} from 'rm-lib-ui';
import PropertiesTable from '../PropertiesTable';


export default function DropdownDoc(props) {
  const [dropdownActionActive, setDropdownActionActive] = useState(false);

  const [color, setColor] = useState('');
  const [caption, setCaption] = useState('Example');

  const colors = ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'dark', 'light', 'link', ''];
  const rows = [[
    'caption', 'string', 'yes', null, <Textbox value={caption} onChange={e => setCaption(e.target.value)} />,
    'text for caption'
  ], [
    'color', colors.reduce((previous, current) => current ? `${previous} | ${current}` : previous),
    'yes', null,
    <Select onChange={e => setColor(e.target.value)} value={color}>
      {colors.map(colorItem => (<option key={colorItem} >{colorItem}</option>))}
    </Select>, 'fill color'
  ], [
    'children', 'Array<DropdownHeader | DropdownAction | DropdownAnchor | DropdownDivider | DropdownLink>',
    'yes', null, null, null
  ]];

  return (
    <div>
      <Breadcrumb divider="/">
        <BreadcrumbItem><Link to="/">Readme</Link></BreadcrumbItem>
        <BreadcrumbItem active="true">Dropdown</BreadcrumbItem>
      </Breadcrumb>
      <div className='container-md'>
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
            <PropertiesTable caption="Properties of Dropdown" rows={rows} />
            <p>Dropdown supports all native properties of html tag <Code inline={true}>{'<div>'}</Code></p>

            <h2>Code</h2>
            <Code>{`
import { Dropdown, DropdownHeader, DropdownAction, DropdownAnchor, DropdownLink, DropdownDivider } from 'rm-lib-ui';
...
<Dropdown caption="${caption}" color="${color}" >
  <DropdownHeader>Header</DropdownHeader>
  <DropdownAction onClick={() => setDropdownActionActive(!dropdownActionActive)} active={dropdownActionActive}>Action</DropdownAction>
  <DropdownAnchor id="anchor2" href="#">Anchor</DropdownAnchor>
  <DropdownDivider />
  <DropdownLink to="#">Link</DropdownLink>
</Dropdown>`}
            </Code>

            <h2>References</h2>
            <Nav breakAt="allways">
              <NavLink to="/dropdown/action">DropdownAction</NavLink>
              <NavLink to="/dropdown/anchor">DropdownAnchor</NavLink>
              <NavLink to="/dropdown/divider">DropdownDivider</NavLink>
              <NavLink to="/dropdown/header">DropdownHeader</NavLink>
              <NavLink to="/dropdown/link">DropdownLink</NavLink>
            </Nav>
          </div>
        </div>
      </div>
    </div>
  );
}