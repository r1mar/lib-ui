import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sidebar, SidebarNav, NavAnchor, Textbox, Breadcrumb, BreadcrumbItem, Code, NavLink } from 'rm-lib-ui';
import PropertiesTable from '../PropertiesTable';
import References from '../Referenzes';

export default function SidebarNavDoc(props) {
  const [header, setHeader] = useState('Saved reports');

  const rows = [[
    'header', 'string or any inline tag', 'yes', 'text',
    <Textbox value={header} onChange={e => setHeader(e.target.value)} />, null
  ], [
    'children', 'Array<NavAnchor | NavAction | NavDropdown | NavLink>', 'yes', null, null, null
  ]];

  return (
    <div>
      <Breadcrumb className="d-block d-xl-none">
        <BreadcrumbItem><Link to="/">Readme</Link></BreadcrumbItem>
        <BreadcrumbItem active="true">Sidebar</BreadcrumbItem>
      </Breadcrumb>

            <h1>SidebarNav</h1>
            <p>nav for using as child of sidebar</p>
            <Sidebar backgroundColor="light">
              <SidebarNav header={header}>
                <NavAnchor href="/sidebar/nav">Dashboard</NavAnchor>
                <NavAnchor href="#">Orders</NavAnchor>
                <NavAnchor href="#">Products</NavAnchor>
                <NavAnchor href="#">Customers</NavAnchor>
                <NavAnchor href="#">Reports</NavAnchor>
                <NavAnchor href="#">Integrations</NavAnchor>
              </SidebarNav>
            </Sidebar>

            <h2>Properties</h2>
            <PropertiesTable caption="Properties of SidebarNav" rows={rows} />
            <p>SidebarNav supports all native properties of html tag <Code inline={true}>{'<ul>'}</Code></p>

            <h2>Code</h2>
            <Code>
              {`import { Sidebar, SidebarNav } from 'rm-lib-ui';
  ...
  <Sidebar backgroundColor="light" >
    <SidebarNav header="${header}">
      <NavAnchor href="/sidebar">Dashboard</NavAnchor>
      <NavAnchor href="#">Orders</NavAnchor>
      <NavAnchor href="#">Products</NavAnchor>
      <NavAnchor href="#">Customers</NavAnchor>
      <NavAnchor href="#">Reports</NavAnchor>
      <NavAnchor href="#">Integrations</NavAnchor>
    </SidebarNav>
  </Sidebar>`}
            </Code>

      <References>
        <NavLink to="/nav/action">NavAction</NavLink>
        <NavLink to="/nav/anchor">NavAnchor</NavLink>
        <NavLink to="/nav/dropdown">NavDropdown</NavLink>
        <NavLink to="/nav/link">NavLink</NavLink>
      </References>
    </div>
  );
}