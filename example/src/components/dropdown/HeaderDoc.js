import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  DropdownHeader, Dropdown,
  Breadcrumb, BreadcrumbItem, Code, Select
} from 'rm-lib-ui';
import PropertiesTable from '../PropertiesTable';


export default function HeaderDoc(props) {
  const [importance, setImportance] = useState(6);

  const importances = [1, 2, 3, 4, 5, 6];
  const rows = [[
    'importance', importances.reduce((previous, current) => current ? `${previous} | ${current}` : previous), 'yes', 6,
    <Select onChange={e => setImportance(+e.target.value)} value={importance}>
      {importances.map(importanceItem => (<option key={importanceItem} >{importanceItem}</option>))}
    </Select>, <span>renders as <Code inline={true}>{'<h1>'}</Code> until <Code inline={true}>{'<h6>'}</Code> without any visual effect</span>
  ], [
    'children', 'object | string', 'yes', null, null, 'string or any inline tag'
  ]];

  return (
    <div>
      <Breadcrumb divider="/">
        <BreadcrumbItem><Link to="/">Readme</Link></BreadcrumbItem>
        <BreadcrumbItem><Link to="/dropdown">Dropdown</Link></BreadcrumbItem>
        <BreadcrumbItem active="true">DropdownHeader</BreadcrumbItem>
      </Breadcrumb>
      <div className='container-md'>
        <div className='row'>
          <div className='col'>
            <h1>DropdownHeader</h1>
            <p>Simple DropdownHeader with different sizes from <Code inline={true}>{'<h1>'}</Code> to <Code inline={true}>{'<h6>'}</Code></p>
            <Dropdown caption="Example" color="dark">
              <DropdownHeader importance={importance} >
                Example Header
              </DropdownHeader>
            </Dropdown>

            <h2>Properties</h2>
            <PropertiesTable caption="Properties of Dropdownheader" rows={rows} />
            <p>DropdownHeaders supports all native properties of html tag <Code inline={true}>{'<h1>'}</Code></p>

            <h2>Code</h2>
            <Code>{`import { DropdownHeader, Dropdown } from 'rm-lib-ui';
...
<Dropdown caption="Example" color="dark">
  <DropdownHeader importance={importance} >
    Example Header
  </DropdownHeader>
</Dropdown>`}
            </Code>
          </div>
        </div>
      </div>
    </div>
  );
}