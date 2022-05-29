import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar, Textbox, NavbarText,
  Breadcrumb, BreadcrumbItem, Code, Table, TableHeaderCell, TableRow, TableCell, TableHeader, 
} from 'rm-lib-ui';


export default function NavDoc(props) {
  const [text, setText] = useState('Example');

  return (
    <div>
      <Breadcrumb divider="/">
        <BreadcrumbItem><Link to="/">Readme</Link></BreadcrumbItem>
        <BreadcrumbItem><Link to="/navbar">Navbar</Link></BreadcrumbItem>
        <BreadcrumbItem active="true">NavbarText</BreadcrumbItem>
      </Breadcrumb>
      <div className='container-md'>
        <div className='row'>
          <div className='col'>
            <h1>NavbarText</h1>
            <p>NavbarText is subitem of Navbar </p>
            <Navbar>
            <NavbarText >
              {text}
            </NavbarText>
            </Navbar>

            <h2>Properties</h2>
            <Table caption="Properties of NavbarText">
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
                  <TableCell>children</TableCell>
                  <TableCell>string</TableCell>
                  <TableCell>yes</TableCell>
                  <TableCell></TableCell>
                  <TableCell><Textbox value={text} onChange={e => setText(e.target.value)} /></TableCell>
                  <TableCell />
                </TableRow>
              </tbody>
            </Table>
            <p>Nav supports all native properties of html tag <Code inline={true}>{'<span>'}</Code></p>

            <h2>Code</h2>
            <Code>{`import { Navbar, NavbarText } from 'rm-lib-ui';
...
<Navbar>
  <NavbarText>{text}</NavbarText>
</Navbar>`}
            </Code>

          </div>
        </div>
      </div>
    </div>
  );
}