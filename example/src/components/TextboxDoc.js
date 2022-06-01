import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Textbox, Select, Breadcrumb, BreadcrumbItem, Code } from 'rm-lib-ui';
import PropertiesTable from './PropertiesTable';

export default function TextboxDoc(props) {
    const [value, setValue] = useState('');
    const [placeholder, setPlaceholder] = useState('');
    const [type, setType] = useState('text');
  
    const types = ['email', 'number', 'password', 'search', 'tel', 'text', 'url'];
  
    const rows = [[
      'value', 'string', 'yes', null, null, null
    ], [
      'placeholder', 'string', 'yes', null, <Textbox value={placeholder} onChange={e => setPlaceholder(e.target.value)} />, null
    ], [
      'type', types.reduce((previous, current) => current ? `${previous} | ${current}` : previous), 'yes', 'text',
      <Select onChange={e => setType(e.target.value)} value={type}>
        {types.map(item => (<option key={item} >{item}</option>))}
      </Select>, null
    ]];

    return (
      <div>
        <Breadcrumb divider="/">
          <BreadcrumbItem><Link to="/">Readme</Link></BreadcrumbItem>
          <BreadcrumbItem active="true">Textbox</BreadcrumbItem>
        </Breadcrumb>
        <div className='container-md'>
          <div className='row'>
            <div className='col'>
              <h1>Textbox</h1>
              <p>Simple Textbox with some types</p>
              <Textbox value={value} placeholder={placeholder} type={type} onChange={ e => setValue(e.target.value)} />
  
              <h2>Properties</h2>
              <PropertiesTable caption="Properties of Textbox" rows={rows} />
              <p>Textbox supports all native properties of html tag <Code inline={true}>{'<input>'}</Code></p>
  
              <h2>Code</h2>
              <Code>
                {`import { Textbox } from 'rm-lib-ui';
  ...
  <Textbox value="${value}" placeholder="${placeholder}" type="${type}" onChange={onChange} />`}
              </Code>
            </div>
          </div>
        </div>
      </div>
  );
}