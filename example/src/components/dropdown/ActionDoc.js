import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  DropdownAction, Dropdown,
  Breadcrumb, BreadcrumbItem, Code, Table, TableHeader, TableHeaderCell, TableRow, TableCell, Select, Textbox,
} from 'rm-lib-ui';


export default function ActionDoc(props) {
  const [active, setActive] = useState(false);
  const [activeLabel, setActiveLabel] = useState('Active');
  const [disabled, setDisabled] = useState(false);

  return (
    <div>
      <Breadcrumb divider="/">
        <BreadcrumbItem><Link to="/">Readme</Link></BreadcrumbItem>
        <BreadcrumbItem><Link to="/dropdown">Dropdown</Link></BreadcrumbItem>
        <BreadcrumbItem active="true">DropdownAction</BreadcrumbItem>
      </Breadcrumb>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h1>DropdownAction</h1>
            <p>Simple clickable DropdownAction</p>
            <Dropdown caption="Example" color="dark">
              <DropdownAction active={active} activeLabel={activeLabel} disabled={disabled} onClick={() => {}} >
                Example Action
              </DropdownAction>
            </Dropdown>

            <h2>Properties</h2>
            <Table caption="Properties of DropdownAction">
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
                  <TableCell>active</TableCell>
                  <TableCell>boolean</TableCell>
                  <TableCell>yes</TableCell>
                  <TableCell>false</TableCell>
                  <TableCell>
                    <Select onChange={e => setActive(e.target.value === 'true' ? true : false)} value={active}>
                      {['true', 'false'].map(item => (<option key={item} >{item}</option>))}
                    </Select>
                  </TableCell>
                  <TableCell>show active state visual</TableCell>
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
            <p>DropdownAction supports all native properties of html tag <Code inline={true}>{'<a>'}</Code></p>

            <h2>Code</h2>
            <Code>{`import { DropdownAction, Dropdown } from 'rm-lib-ui';
...
<Dropdown caption="Example" color="dark">
  <DropdownAction active={active} activeLabel="${activeLabel}" onClick={onClick} disabled={disabled} >
    Example Action
  </DropdownAction>
</Dropdown>`}
            </Code>
          </div>
        </div>
      </div>
    </div>
  );
}