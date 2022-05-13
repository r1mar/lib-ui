import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Nav, NavAction, NavAnchor, NavDropdown, NavLink, Select, DropdownAction,
  Breadcrumb, BreadcrumbItem, Code, Table, TableHeader, TableHeaderCell, TableRow, TableCell
} from 'rm-lib-ui';


export default function NavDoc(props) {
  const [actionActive, setActionActive] = useState(false);
  const [aligment, setAligment] = useState('start');
  const [breakAt, setBreakAt] = useState('');

  const aligments = [ 'start', 'center', 'end', 'around', 'betweeen'];
  const breaks = ['allways', 'sm', 'md', 'lg', 'xl', '']; 

  return (
    <div>
      <Breadcrumb divider="/">
        <BreadcrumbItem><Link to="/">Readme</Link></BreadcrumbItem>
        <BreadcrumbItem active="true">Nav</BreadcrumbItem>
      </Breadcrumb>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h1>Nav</h1>
            <p>Nav</p>
            <Nav aligment={aligment} breakAt={breakAt} >
              <NavAction onClick={() => setActionActive(!actionActive)} active={actionActive}>Action</NavAction>
              <NavAnchor id="anchor2" href="#">Anchor</NavAnchor>
              <NavDropdown caption="NavDropdown">
                <DropdownAction onClick={() => setActionActive(!actionActive)} active={actionActive}>Action</DropdownAction>
              </NavDropdown>
              <NavLink to="#">Link</NavLink>
            </Nav>

            <h2>Properties</h2>
            <Table caption="Properties of Nav">
              <TableHeader>
                <TableRow>
                  <TableHeaderCell scope="col">Name</TableHeaderCell>
                  <TableHeaderCell scope="col">Type</TableHeaderCell>
                  <TableHeaderCell scope="col" title="Optional">Opt.</TableHeaderCell>
                  <TableHeaderCell scope="col" title="Default">Def.</TableHeaderCell>
                  <TableHeaderCell scope="col">Value</TableHeaderCell>
                  <TableHeaderCell scope="col">Description</TableHeaderCell>
                </TableRow>
              </TableHeader>
              <tbody>
                <TableRow>
                  <TableCell>aligment</TableCell>
                  <TableCell>string</TableCell>
                  <TableCell>yes</TableCell>
                  <TableCell>start</TableCell>
                  <TableCell>
                    <Select value={aligment} onChange={e => setAligment(e.target.value)}>
                      {aligments.map(item => (<option key={item}>{item}</option>))}
                    </Select>
                  </TableCell>
                  <TableCell>Hotizontal Aligment</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>breaktAt</TableCell>
                  <TableCell>string</TableCell>
                  <TableCell>yes</TableCell>
                  <TableCell>allways</TableCell>
                  <TableCell>
                    <Select value={breakAt} onChange={e => setBreakAt(e.target.value)}>
                      {breaks.map(item => (<option key={item}>{item}</option>))}
                    </Select>
                  </TableCell>
                  <TableCell>Breakpoint to vertikal</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>children</TableCell>
                  <TableCell>{'Array<NavAction | NavAnchor | NavDropdown | NavLink>'}</TableCell>
                  <TableCell>yes</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell />
                </TableRow>
              </tbody>
            </Table>
            <p>Nav supports all native properties of html tag <Code inline={true}>{'<ul>'}</Code></p>

            <h2>Code</h2>
            <Code>{`import { Nav, NavAction, NavAnchor, NavLink, NavDropdown, DropdownAction } from 'rm-lib-ui';
...
<Nav aligment="${aligment}" breakAt="${breakAt}" >
  <NavAction onClick={() => setActionActive(!navActionActive)} active={actionActive}>Action</NavAction>
  <NavAnchor id="anchor2" href="#">Anchor</NavAnchor>
  <NavDropdown>
    <DropdownAction onClick={() => setActionActive(!navActionActive)} active={actionActive}>Action</DropdownAction>
  </NavDropdown>
  <NavLink to="#">Link</NavLink>
</Nav>`}
            </Code>

            <h2>References</h2>
            <Nav breakAt="allways">
              <NavLink to="/nav/action">NavAction</NavLink>
              <NavLink to="/nav/anchor">NavAnchor</NavLink>
              <NavLink to="/nav/dropdown">NavDropdown</NavLink>
              <NavLink to="/nav/link">NavLink</NavLink>
            </Nav>
          </div>
        </div>
      </div>
    </div>
  );
}