import React from 'react';
import { Link } from 'react-router-dom';
import {
  DropdownDivider, Dropdown, DropdownHeader, DropdownAction,
  Breadcrumb, BreadcrumbItem, Code
} from 'rm-lib-ui';


export default function DividerDoc(props) {
  return (
    <div>
      <Breadcrumb divider="/">
        <BreadcrumbItem><Link to="/">Readme</Link></BreadcrumbItem>
        <BreadcrumbItem><Link to="/dropdown">Dropdown</Link></BreadcrumbItem>
        <BreadcrumbItem active="true">DropdownDivider</BreadcrumbItem>
      </Breadcrumb>
      <div className='container-md'>
        <div className='row'>
          <div className='col'>
            <h1>DropdownDivider</h1>
            <p>Simple DropdownDivider</p>
            <Dropdown caption="Example" color="dark">
              <DropdownHeader>Header</DropdownHeader>
              <DropdownDivider />
              <DropdownAction onClick={e => {}}>any Action</DropdownAction>
            </Dropdown>

            <h2>Properties</h2>
            <p>DropdownDivider supports all native properties of html tag <Code inline={true}>{'<div>'}</Code></p>

            <h2>Code</h2>
            <Code>{`import { DropdownDivider, Dropdown, DropdownAction, DropdownHeader } from 'rm-lib-ui';
...
<Dropdown caption="Example" color="dark">
  <DropdownHeader>Header</DropdownHeader>
  <DropdownDivider />
  <DropdownAction onClick={e => {}}>any Action</DropdownAction>
</Dropdown>`}
            </Code>
          </div>
        </div>
      </div>
    </div>
  );
}