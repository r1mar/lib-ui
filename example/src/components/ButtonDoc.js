import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Breadcrumb, BreadcrumbItem, Code, Select
} from 'rm-lib-ui';
import PropertiesTable from './PropertiesTable';


export default function ButtonDoc(props) {
  const [color, setColor] = useState('');
  const [outlineColor, setOutlineColor] = useState('');

  const colors = ['dark', 'light', 'primary', 'secondary', 'success', 'warning', 'danger', 'info', 'link', ''];
  const outlineColors = ['dark', 'light', 'primary', 'secondary', 'success', 'warning', 'danger', 'info', 'link', ''];

  const rows = [[
    'color', colors.reduce((previous, current) => current ? `${previous} | ${current}` : previous), 'yes', null,
    <Select onChange={e => setColor(e.target.value)} value={color}>
      {colors.map(colorItem => (<option key={colorItem} >{colorItem}</option>))}
    </Select>, 'Fill Color'
  ], [
    'outlineColor', outlineColors.reduce((previous, current) => current ? `${previous} | ${current}` : previous), 'yes', null,
    <Select onChange={e => setOutlineColor(e.target.value)} value={outlineColor}>
      {outlineColors.map(outlineItem => (<option key={outlineItem} >{outlineItem}</option>))}
    </Select>, null
  ], [
    'children', 'object | string', 'yes', null, null, 'caption string or any tag'
  ]];

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
            <PropertiesTable caption="Properties of Button" rows={rows} />
            <p>Buttons supports all native properties of html tag <Code inline={true}>{'<button>'}</Code></p>

            <h2>Code</h2>
            <Code>{`import { Button } from 'rm-lib-ui';
...
<Button color="${color}" outlineColor="${outlineColor}" >
  Example
</Button>`}
            </Code>
          </div>
        </div>
      </div>
    </div>
  );
}