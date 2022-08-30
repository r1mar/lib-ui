import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  NavLink, Nav,
  Breadcrumb, BreadcrumbItem, Code, Select, Textbox,
} from 'rm-lib-ui';
import PropertiesTable from '../PropertiesTable';


export default function LinkDoc(props) {
  const [to, setTo] = useState('/nav')
  const [activeLabel, setActiveLabel] = useState('Active');
  const [disabled, setDisabled] = useState(false);
  const [color, setColor] = useState(null);

  const colors = ['primary','secondary','success','info','danger','warning','light','dark','body','muted',
                  'white','black-50','white-50'];

  const rows = [[
    'to', 'string', 'no', null, <Textbox onChange={e => setTo(e.target.value)} value={to} />, 'Routing target'
  ], [
    'color', colors.reduce((previous, current) => current ? `${previous} | ${current}` : previous), 'yes', null,
    <Select onChange={e => setColor(e.target.value)} value={color}>
      {colors.map(item => (<option key={item} >{item}</option>))}
    </Select>, 'set text color'
  ], [
    'activeLabel', 'string', 'yes', null, <Textbox onChange={e => setActiveLabel(e.target.value)} value={activeLabel} />,
    'show label for screen reader'
  ], [
    'disabled', 'boolean', 'yes', null,
    <Select onChange={e => setDisabled(e.target.value === 'true' ? true : false)} value={disabled} >
      {['true', 'false'].map(item => (<option key={item} >{item}</option>))}
    </Select>, 'suppress click event and show disabled state visuall'
  ], [
    'children', 'object | string', 'yes', null, null, 'string or any inline tag'
  ]];

  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem><Link to="/">Readme</Link></BreadcrumbItem>
        <BreadcrumbItem><Link to="/nav">Nav</Link></BreadcrumbItem>
        <BreadcrumbItem active="true">NavLink</BreadcrumbItem>
      </Breadcrumb>

      <h1>NavLink</h1>
      <p>Simple clickable NavLink(react-router). it became active state by current url automatically</p>
      <Nav >
        <NavLink activeLabel={activeLabel} disabled={disabled} to={to} color={color} >
          Example Link
        </NavLink>
      </Nav>

      <h2>Properties</h2>
      <PropertiesTable caption="Properties of NavLink" rows={rows} />
      <p>NavLink supports all native properties of html tag <Code inline={true}>{'<a>'}</Code></p>

      <h2>Code</h2>
      <Code>{`import { NavLink, Nav } from 'rm-lib-ui';
...
<Nav >
  <NavLink to="${to}" activeLabel="${activeLabel}" disabled={disabled}
      color="${color}" >
    Example Link
  </NavLink>
</Nav>`}
      </Code>
    </div>

  );
}