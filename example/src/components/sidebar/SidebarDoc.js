import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sidebar, SidebarNav, NavAnchor, Select, Breadcrumb, BreadcrumbItem, Code, NavLink } from 'rm-lib-ui';
import PropertiesTable from '../PropertiesTable';
import References from '../Referenzes';

export default function SidebarDoc(props) {
  const [backgroundColor, setBackgroundColor] = useState('light');

  const backgroundColors = ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark', 'white', 'transparent'];

  const rows = [[
    'backgroundColor', backgroundColors.reduce((previous, current) => current ? `${previous} | ${current}` : previous), 'yes', 'light',
    <Select onChange={e => setBackgroundColor(e.target.value)} value={backgroundColor}>
      {backgroundColors.map(item => (<option key={item} >{item}</option>))}
    </Select>, null
  ], [
    'children', 'Array<SidebarNav>', 'yes', null, null, null
  ]];

  return (
    <div>
      <Breadcrumb className="d-block d-xl-none">
        <BreadcrumbItem><Link to="/">Readme</Link></BreadcrumbItem>
        <BreadcrumbItem active="true">Sidebar</BreadcrumbItem>
      </Breadcrumb>

      <h1>Sidebar</h1>
      <p>Simple Sidebar with some backgroundColors</p>
      <Sidebar backgroundColor={backgroundColor}>
        <SidebarNav>
          <NavAnchor href="/sidebar">Dashboard</NavAnchor>
          <NavAnchor href="#">Orders</NavAnchor>
          <NavAnchor href="#">Products</NavAnchor>
          <NavAnchor href="#">Customers</NavAnchor>
          <NavAnchor href="#">Reports</NavAnchor>
          <NavAnchor href="#">Integrations</NavAnchor>
        </SidebarNav>

        <SidebarNav header="Saved reports">
          <NavAnchor href="#">Current month</NavAnchor>
          <NavAnchor href="#">Last quarter</NavAnchor>
          <NavAnchor href="#">Social engagement</NavAnchor>
          <NavAnchor href="#">Year-end sale</NavAnchor>
        </SidebarNav>
      </Sidebar>

      <h2>Properties</h2>
      <PropertiesTable caption="Properties of Sidebar" rows={rows} />
      <p>Sidebar supports all native properties of html tag <Code inline={true}>{'<nav>'}</Code></p>

      <h2>Code</h2>
      <Code>
        {`import { Sidebar } from 'rm-lib-ui';
  ...
  <Sidebar backgroundColor="${backgroundColor}" >
    <SidebarNav>
      <NavAnchor href="/sidebar">Dashboard</NavAnchor>
      <NavAnchor href="#">Orders</NavAnchor>
      <NavAnchor href="#">Products</NavAnchor>
      <NavAnchor href="#">Customers</NavAnchor>
      <NavAnchor href="#">Reports</NavAnchor>
      <NavAnchor href="#">Integrations</NavAnchor>
    </SidebarNav>

    <SidebarNav header="Saved reports">
      <NavAnchor href="#">Current month</NavAnchor>
      <NavAnchor href="#">Last quarter</NavAnchor>
      <NavAnchor href="#">Social engagement</NavAnchor>
      <NavAnchor href="#">Year-end sale</NavAnchor>
    </SidebarNav>
  </Sidebar>`}
      </Code>

      <References breakAt="allways">
        <NavLink to="/sidebar/nav">SidebarNav</NavLink>
        <NavLink to="/nav/action">NavAction</NavLink>
        <NavLink to="/nav/anchor">NavAnchor</NavLink>
        <NavLink to="/nav/dropdown">NavDropdown</NavLink>
        <NavLink to="/nav/link">NavLink</NavLink>
      </References>

    </div>
  );
}