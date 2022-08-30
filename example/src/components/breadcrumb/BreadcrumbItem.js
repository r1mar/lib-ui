import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BreadcrumbItem,
  Breadcrumb, Code, Select, Textbox,
} from 'rm-lib-ui';
import PropertiesTable from '../PropertiesTable';


export default function ActionDoc(props) {
  const [active, setActive] = useState(false);
  const [text, setText] = useState('location');

  const rows = [[
    'active', 'boolean', 'yes', 'false',
    <Select onChange={e => setActive(e.target.value === 'true' ? true : false)} value={active}>
      {['true', 'false'].map(item => (<option key={item} >{item}</option>))}
    </Select>, 'show active state visual'
  ], [
    'children', 'object | string', 'yes', null, <Textbox value={text} onChange={e => setText(e.target.value)} />, 
    'string or any inline tag'
  ]];

  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem><Link to="/">Readme</Link></BreadcrumbItem>
        <BreadcrumbItem><Link to="/breadcrumb">Breadcrumb</Link></BreadcrumbItem>
        <BreadcrumbItem active="true">BreadcrumbItem</BreadcrumbItem>
      </Breadcrumb>

      <h1>BreadcrumbItem</h1>
      <p>BreadcrumbItem</p>
      <Breadcrumb>
        <BreadcrumbItem active={active}>{text}</BreadcrumbItem>
      </Breadcrumb>

      <h2>Properties</h2>
      <PropertiesTable caption="Properties of BreadcrumbItem" rows={rows} />
      <p>BreadcrumbItem supports all native properties of html tag <Code inline={true}>{'<li>'}</Code></p>

      <h2>Code</h2>
      <Code>{`
import { Breadcrumb, BreadcrumbItem } from 'rm-lib-ui';
import { Link } from 'react-router-dom';
...
<Breadcrumb>
  <BreadcrumbItem active="${active}">${text}</BreadcrumbItem>
</Breadcrumb>`}
      </Code>
    </div>
  );
}