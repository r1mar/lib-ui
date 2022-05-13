import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  DropdownHeader, Dropdown,
  Breadcrumb, BreadcrumbItem, Code, Table, TableHeader, TableHeaderCell, TableRow, TableCell, Select
} from 'rm-lib-ui';


export default function HeaderDoc(props) {
  const [importance, setImportance] = useState(6);

  const importances = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      <Breadcrumb divider="/">
        <BreadcrumbItem><Link to="/">Readme</Link></BreadcrumbItem>
        <BreadcrumbItem><Link to="/dropdown">Dropdown</Link></BreadcrumbItem>
        <BreadcrumbItem active="true">DropdownHeader</BreadcrumbItem>
      </Breadcrumb>
      <div className='container'>
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
            <Table caption="Properties of Dropdownheader">
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
                  <TableCell>importance</TableCell>
                  <TableCell>{importances.reduce((previous, current) => current ? `${previous} | ${current}` : previous)}</TableCell>
                  <TableCell>yes</TableCell>
                  <TableCell>6</TableCell>
                  <TableCell>
                    <Select onChange={e => setImportance(+e.target.value)} value={importance}>
                      {importances.map(importanceItem => (<option key={importanceItem} >{importanceItem}</option>))}
                    </Select>
                  </TableCell>
                  <TableCell>renders as <Code inline={true}>{'<h1>'}</Code> until <Code inline={true}>{'<h6>'}</Code> without any visual effect</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>children</TableCell>
                  <TableCell>object | string</TableCell>
                  <TableCell>yes</TableCell>
                  <TableCell></TableCell>
                  <TableCell>string or any inline tag</TableCell>
                  <TableCell />
                </TableRow>
              </tbody>
            </Table>
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