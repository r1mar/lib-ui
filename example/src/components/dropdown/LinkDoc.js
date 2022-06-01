import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  DropdownLink, Dropdown,
  Breadcrumb, BreadcrumbItem, Code, Select, Textbox,
} from 'rm-lib-ui';
import PropertiesTable from '../PropertiesTable';


export default function LinkDoc(props) {
  const [to, setTo] = useState('/dropdown')
  const [activeLabel, setActiveLabel] = useState('Active');
  const [disabled, setDisabled] = useState(false);

  const rows = [[
    'to', 'string', 'no', null, <Textbox onChange={e => setTo(e.target.value)} value={to} />, 'Routing target'
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
      <Breadcrumb divider="/">
        <BreadcrumbItem><Link to="/">Readme</Link></BreadcrumbItem>
        <BreadcrumbItem><Link to="/dropdown">Dropdown</Link></BreadcrumbItem>
        <BreadcrumbItem active="true">DropdownLink</BreadcrumbItem>
      </Breadcrumb>
      <div className='container-md'>
        <div className='row'>
          <div className='col'>
            <h1>DropdownLink</h1>
            <p>Simple clickable DropdownLink(react-router). it became active state by current url automatically</p>
            <Dropdown caption="Example" color="dark">
              <DropdownLink activeLabel={activeLabel} disabled={disabled} to={to} >
                Example Link
              </DropdownLink>
            </Dropdown>

            <h2>Properties</h2>
            <PropertiesTable caption="Properties of DropdownLink" rows={rows} />
            <p>DropdownLink supports all native properties of html tag <Code inline={true}>{'<a>'}</Code></p>

            <h2>Code</h2>
            <Code>{`import { DropdownLink, Dropdown } from 'rm-lib-ui';
...
<Dropdown caption="Example" color="dark">
  <DropdownLink to="${to}" activeLabel="${activeLabel}" disabled={disabled} >
    Example Link
  </DropdownLink>
</Dropdown>`}
            </Code>
          </div>
        </div>
      </div>
    </div>
  );
}