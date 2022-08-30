import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavLink,
  Breadcrumb, BreadcrumbItem, Code
} from 'rm-lib-ui';
import PropertiesTable from '../PropertiesTable';
import References from '../Referenzes';


export default function DropdownDoc(props) {
  const rows = [[
    'children', 'Array<BreadcrumbItem>',
    'yes', null, null, null
  ]];

  return (
    <div>
      <Breadcrumb className="d-block d-xl-none">
        <BreadcrumbItem><Link to="/">Readme</Link></BreadcrumbItem>
        <BreadcrumbItem active="true">Dropdown</BreadcrumbItem>
      </Breadcrumb>

      <h1>Breadcrump</h1>
      <p>Breadcrumb</p>
      <Breadcrumb>
        <BreadcrumbItem><Link to="/breadcrumb">example root</Link></BreadcrumbItem>
        <BreadcrumbItem active="true">aktive location</BreadcrumbItem>
      </Breadcrumb>

      <h2>Properties</h2>
      <PropertiesTable caption="Properties of Breadcrumb" rows={rows} />
      <p>Dropdown supports all native properties of html tag <Code inline={true}>{'<nav>'}</Code></p>

      <h2>Code</h2>
      <Code>{`
import { Breadcrumb, BreadcrumbItem } from 'rm-lib-ui';
import { Link } from 'react-router-dom';
...
<Breadcrumb>
  <BreadcrumbItem><Link to="/breadcrumb">example root</Link></BreadcrumbItem>
  <BreadcrumbItem active="true">aktive location</BreadcrumbItem>
</Breadcrumb>`}
      </Code>

      <References>
        <NavLink to="/breadcrumb/item">BreadcrumbItem</NavLink>
      </References>
    </div>
  );
}