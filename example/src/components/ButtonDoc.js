import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Breadcrumb, BreadcrumbItem, Code, Table, TableHeader, TableHeaderCell, TableRow, TableCell, Select
} from 'rm-lib-ui';


export default function ButtonDoc(props) {
  const [color, setColor] = useState('');
  const [outlineColor, setOutlineColor] = useState('');

  const colors = ['dark', 'light', 'primary', 'secondary', 'success', 'warning', 'danger', 'info', 'link', ''];
  const outlineColors = ['dark', 'light', 'primary', 'secondary', 'success', 'warning', 'danger', 'info', 'link', ''];

  const example = `import { Button } from 'rm-lib-ui';
...
<Button color="${color}" outlineColor="${outlineColor}" >
  Example
</Button>`;

  return (
    <div>
      <Breadcrumb divider="/">
        <BreadcrumbItem><Link to="/">Readme</Link></BreadcrumbItem>
        <BreadcrumbItem active="true">Button</BreadcrumbItem>
      </Breadcrumb>
      <div className='container-md'>
        <div className='row'>
          <div className='col'>
            <h1>Button</h1>
            <p>Simple Button with types 'button', 'reset' and 'submit'</p>
            <Button color={color} outlineColor={outlineColor}>Example</Button>

            <h2>Properties</h2>
            <Table caption="Properties of Button">
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
                  <TableCell>color</TableCell>
                  <TableCell>{colors.reduce((previous, current) => current ? `${previous} | ${current}` : previous)}</TableCell>
                  <TableCell>yes</TableCell>
                  <TableCell></TableCell>
                  <TableCell>
                    <Select onChange={e => setColor(e.target.value)} value={color}>
                      {colors.map(colorItem => (<option key={colorItem} >{colorItem}</option>))}
                    </Select>
                  </TableCell>
                  <TableCell>Fill Color</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>outlineColor</TableCell>
                  <TableCell>{outlineColors.reduce((previous, current) => current ? `${previous} | ${current}` : previous)}</TableCell>
                  <TableCell>yes</TableCell>
                  <TableCell></TableCell>
                  <TableCell>
                    <Select onChange={e => setOutlineColor(e.target.value)} value={outlineColor}>
                      {outlineColors.map(outlineItem => (<option key={outlineItem} >{outlineItem}</option>))}
                    </Select>
                  </TableCell>
                  <TableCell />
                </TableRow>
                <TableRow>
                  <TableCell>children</TableCell>
                  <TableCell>object | string</TableCell>
                  <TableCell>yes</TableCell>
                  <TableCell></TableCell>
                  <TableCell>caption string or any tags</TableCell>
                  <TableCell />
                </TableRow>
              </tbody>
            </Table>
            <p>Buttons supports all native properties of html tag <Code inline={true}>{'<button>'}</Code></p>

            <h2>Code</h2>
            <Code>
              {example}
            </Code>
          </div>
        </div>
      </div>
    </div>
  );
}