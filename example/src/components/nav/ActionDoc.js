import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  NavAction, Nav,
  Breadcrumb, BreadcrumbItem, Code, Select, Textbox,
} from 'rm-lib-ui';
import PropertiesTable from '../PropertiesTable';


export default function ActionDoc(props) {
  const [active, setActive] = useState(false);
  const [activeLabel, setActiveLabel] = useState('Active');
  const [disabled, setDisabled] = useState(false);

  const rows = [[
    'active', 'boolean', 'yes', 'false',
    <Select onChange={e => setActive(e.target.value === 'true' ? true : false)} value={active}>
      {['true', 'false'].map(item => (<option key={item} >{item}</option>))}
    </Select>, 'show active state visual'
  ], [
    'activeLabel', 'string', 'yes', null, <Textbox onChange={e => setActiveLabel(e.target.value)} value={activeLabel} />,
    'show label for screen reader'
  ], [
    'disabled', 'boolean', 'yes', null,
    <Select onChange={e => setDisabled(e.target.value === 'true' ? true : false)} value={disabled} >
      {['true', 'false'].map(item => (<option key={item} >{item}</option>))}
    </Select>, 'suppress click event and show disabled state visuall'
  ], [
    'children', 'object | string', 'yes', null, 'string or any inline tag'
  ]];

  return (
    <div>
      <Breadcrumb divider="/">
        <BreadcrumbItem><Link to="/">Readme</Link></BreadcrumbItem>
        <BreadcrumbItem><Link to="/nav">Nav</Link></BreadcrumbItem>
        <BreadcrumbItem active="true">NavAction</BreadcrumbItem>
      </Breadcrumb>
      <div className='container-md'>
        <div className='row'>
          <div className='col'>
            <h1>NavAction</h1>
            <p>Simple clickable NavAction</p>
            <Nav>
              <NavAction active={active} activeLabel={activeLabel} disabled={disabled} onClick={() => {}} >
                Example Action
              </NavAction>
            </Nav>

            <h2>Properties</h2>
            <PropertiesTable caption="Properties of NavAction" rows={rows} />
            <p>NavAction supports all native properties of html tag <Code inline={true}>{'<a>'}</Code></p>

            <h2>Code</h2>
            <Code>{`import { NavAction, Nav } from 'rm-lib-ui';
...
<Nav>
  <NavAction active={active} activeLabel="${activeLabel}" onClick={onClick} disabled={disabled} >
    Example Action
  </NavAction>
</Nav>`}
            </Code>
          </div>
        </div>
      </div>
    </div>
  );
}