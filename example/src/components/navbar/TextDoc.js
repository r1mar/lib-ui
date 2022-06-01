import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar, Textbox, NavbarText,
  Breadcrumb, BreadcrumbItem, Code
} from 'rm-lib-ui';
import PropertiesTable from '../PropertiesTable';


export default function NavDoc(props) {
  const [text, setText] = useState('Example');

  const rows = [[
    'children', 'string', 'yes', null, <Textbox value={text} onChange={e => setText(e.target.value)} />, null
  ]];

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
            <PropertiesTable caption="Properties of NavbarText" rows={rows} />
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