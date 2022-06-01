import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  NavAnchor, Nav,
  Breadcrumb, BreadcrumbItem, Code, Select, Textbox,
} from 'rm-lib-ui';
import PropertiesTable from '../PropertiesTable';


export default function AnchorDoc(props) {
  const [href, setHref] = useState('/nav')
  const [activeLabel, setActiveLabel] = useState('Active');
  const [disabled, setDisabled] = useState(false);

  const rows = [[
    'href', 'string', 'no', null, <Textbox onChange={e => setHref(e.target.value)} value={href} />,
    'Navigation target of html anchor'
  ], [
    'activeLabel', 'string', 'yes', null, <Textbox onChange={e => setActiveLabel(e.target.value)} value={activeLabel} />,
    'show label for screen reader'
  ], [
    'disabled', 'boolean', 'yes', null,
    <Select onChange={e => setDisabled(e.target.value === 'true' ? true : false)} value={disabled} >
      {['true', 'false'].map(item => (<option key={item} >{item}</option>))}
    </Select>, 'suppress click event and show disabled state visuall'
  ], [
    'children', 'object | string', 'yes', null, null, 'string or any inline tag'
  ]];

  return (
    <div>
      <Breadcrumb divider="/">
        <BreadcrumbItem><Link to="/">Readme</Link></BreadcrumbItem>
        <BreadcrumbItem><Link to="/nav">Nav</Link></BreadcrumbItem>
        <BreadcrumbItem active="true">NavAnchor</BreadcrumbItem>
      </Breadcrumb>
      <div className='container-md'>
        <div className='row'>
          <div className='col'>
            <h1>NavAnchor</h1>
            <p>Simple clickable NavAnchor. it became active state by current url automatically</p>
            <Nav >
              <NavAnchor activeLabel={activeLabel} disabled={disabled} href={href} >
                Example Anchor
              </NavAnchor>
            </Nav>

            <h2>Properties</h2>
            <PropertiesTable caption="Properties of NavAnchor" rows={rows} />
            <p>NavAnchor supports all native properties of html tag <Code inline={true}>{'<a>'}</Code></p>

            <h2>Code</h2>
            <Code>{`import { NavAnchor, Nav } from 'rm-lib-ui';
...
<Nav >
  <NavAnchor href="${href}" activeLabel="${activeLabel}" disabled={disabled} >
    Example Anchor
  </NavAnchor>
</Nav>`}
            </Code>
          </div>
        </div>
      </div>
    </div>
  );
}