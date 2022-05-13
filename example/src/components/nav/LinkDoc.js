import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  NavLink, Nav,
  Breadcrumb, BreadcrumbItem, Code, Table, TableHeader, TableHeaderCell, TableRow, TableCell, Select, Textbox,
} from 'rm-lib-ui';


export default function LinkDoc(props) {
  const [to, setTo] = useState('/nav')
  const [activeLabel, setActiveLabel] = useState('Active');
  const [disabled, setDisabled] = useState(false);

  return (
    <div>
      <Breadcrumb divider="/">
        <BreadcrumbItem><Link to="/">Readme</Link></BreadcrumbItem>
        <BreadcrumbItem><Link to="/nav">Nav</Link></BreadcrumbItem>
        <BreadcrumbItem active="true">NavLink</BreadcrumbItem>
      </Breadcrumb>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h1>NavLink</h1>
            <p>Simple clickable NavLink(react-router). it became active state by current url automatically</p>
            <Nav >
              <NavLink activeLabel={activeLabel} disabled={disabled} to={to} >
                Example Link
              </NavLink>
            </Nav>

            <h2>Properties</h2>
            <Table caption="Properties of NavLink">
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
                  <TableCell>to</TableCell>
                  <TableCell>string</TableCell>
                  <TableCell>no</TableCell>
                  <TableCell></TableCell>
                  <TableCell>
                    <Textbox onChange={e => setTo(e.target.value)} value={to} />
                  </TableCell>
                  <TableCell>Routing target</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>activeLabel</TableCell>
                  <TableCell>string</TableCell>
                  <TableCell>yes</TableCell>
                  <TableCell></TableCell>
                  <TableCell>
                    <Textbox onChange={e => setActiveLabel(e.target.value)} value={activeLabel} />
                  </TableCell>
                  <TableCell>show label for screen reader</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>disabled</TableCell>
                  <TableCell>boolean</TableCell>
                  <TableCell>yes</TableCell>
                  <TableCell></TableCell>
                  <TableCell>
                    <Select onChange={e => setDisabled(e.target.value === 'true' ? true : false)} value={disabled} >
                      {['true', 'false'].map(item => (<option key={item} >{item}</option>))}
                    </Select>
                  </TableCell>
                  <TableCell>suppress click event and show disabled state visuall</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>children</TableCell>
                  <TableCell>object | string</TableCell>
                  <TableCell>yes</TableCell>
                  <TableCell></TableCell>
                  <TableCell />
                  <TableCell>string or any inline tag</TableCell>
                </TableRow>
              </tbody>
            </Table>
            <p>NavLink supports all native properties of html tag <Code inline={true}>{'<a>'}</Code></p>

            <h2>Code</h2>
            <Code>{`import { NavLink, Nav } from 'rm-lib-ui';
...
<Nav >
  <NavLink to="${to}" activeLabel="${activeLabel}" disabled={disabled} >
    Example Link
  </NavLink>
</Nav>`}
            </Code>
          </div>
        </div>
      </div>
    </div>
  );
}