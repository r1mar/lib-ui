import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  DropdownAnchor, Dropdown,
  Breadcrumb, BreadcrumbItem, Code, Select, Textbox,
} from 'rm-lib-ui';
import PropertiesTable from '../PropertiesTable';


export default function AnchorDoc(props) {
  const [href, setHref] = useState('/dropdown')
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
        <BreadcrumbItem><Link to="/dropdown">Dropdown</Link></BreadcrumbItem>
        <BreadcrumbItem active="true">DropdownAnchor</BreadcrumbItem>
      </Breadcrumb>
      <div className='container-md'>
        <div className='row'>
          <div className='col'>
            <h1>DropdownAnchor</h1>
            <p>Simple clickable DropdownAnchor. it became active state by current url automatically</p>
            <Dropdown caption="Example" color="dark">
              <DropdownAnchor activeLabel={activeLabel} disabled={disabled} href={href} >
                Example Anchor
              </DropdownAnchor>
            </Dropdown>

            <h2>Properties</h2>
            <PropertiesTable caption="Properties of DropdownAnchor" rows={rows} />
            <p>DropdownAnchor supports all native properties of html tag <Code inline={true}>{'<a>'}</Code></p>

            <h2>Code</h2>
            <Code>{`import { DropdownAnchor, Dropdown } from 'rm-lib-ui';
...
<Dropdown caption="Example" color="dark">
  <DropdownAnchor href="${href}" activeLabel="${activeLabel}" disabled={disabled} >
    Example Anchor
  </DropdownAnchor>
</Dropdown>`}
            </Code>
          </div>
        </div>
      </div>
    </div>
  );
}