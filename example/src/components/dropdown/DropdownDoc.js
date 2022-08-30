import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Dropdown, NavLink, DropdownAction, DropdownAnchor, DropdownHeader, DropdownDivider, DropdownLink, Textbox,
  Breadcrumb, BreadcrumbItem, Code, Select
} from 'rm-lib-ui';
import PropertiesTable from '../PropertiesTable';
import References from '../Referenzes';


export default function DropdownDoc(props) {
  const [dropdownActionActive, setDropdownActionActive] = useState(false);

  const [color, setColor] = useState('');
  const [textColor, setTextColor] = useState(null);
  const [caption, setCaption] = useState('Example');

  const colors = ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'dark', 'light', 'link', ''];
  const textColors = [null,'primary','secondary','success','info','danger','warning','light','dark','body','muted',
  'white','black-50','white-50'];
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
    'textColor', textColors.slice(1).reduce((previous, current) => current ? `${previous} | ${current}` : previous), 'yes', null,
    <Select onChange={e => setTextColor(e.target.value)} value={textColor}>
      {textColors.map(item => (<option key={item} >{item}</option>))}
    </Select>, 'set text color'
  ], [
    'children', 'Array<DropdownHeader | DropdownAction | DropdownAnchor | DropdownDivider | DropdownLink>',
    'yes', null, null, null
  ]];

  return (
    <div>
      <Breadcrumb className="d-block d-xl-none">
        <BreadcrumbItem><Link to="/">Readme</Link></BreadcrumbItem>
        <BreadcrumbItem active="true">Dropdown</BreadcrumbItem>
      </Breadcrumb>

      <h1>Dropdown</h1>
      <p>Dropdown</p>
      <Dropdown caption={caption} color={color} textColor={textColor} >
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
import { Dropdown, DropdownHeader, DropdownAction, DropdownAnchor, 
  DropdownLink, DropdownDivider } from 'rm-lib-ui';
...
<Dropdown caption="${caption}" color="${color}" textColor="${textColor}" >
  <DropdownHeader>Header</DropdownHeader>
  <DropdownAction onClick={() => setDropdownActionActive(!dropdownActionActive)} 
    active={dropdownActionActive}>Action</DropdownAction>
  <DropdownAnchor id="anchor2" href="#">Anchor</DropdownAnchor>
  <DropdownDivider />
  <DropdownLink to="#">Link</DropdownLink>
</Dropdown>`}
      </Code>

      <References>
        <NavLink to="/dropdown/action">DropdownAction</NavLink>
        <NavLink to="/dropdown/anchor">DropdownAnchor</NavLink>
        <NavLink to="/dropdown/divider">DropdownDivider</NavLink>
        <NavLink to="/dropdown/header">DropdownHeader</NavLink>
        <NavLink to="/dropdown/link">DropdownLink</NavLink>
      </References>
    </div>
  );
}