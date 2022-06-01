import React from 'react';
import { Link } from 'react-router-dom';
import { InlineForm, Textbox, Button, Breadcrumb, BreadcrumbItem, Code } from 'rm-lib-ui';
import PropertiesTable from './PropertiesTable';

export default function InlineFormDoc(props) {
  
    const rows = [[
      'children', 'object | Array<object>', 'yes', null, null, 'Any form controls'
    ]];

    return (
      <div>
        <Breadcrumb divider="/">
          <BreadcrumbItem><Link to="/">Readme</Link></BreadcrumbItem>
          <BreadcrumbItem active="true">InlineForm</BreadcrumbItem>
        </Breadcrumb>
        <div className='container-md'>
          <div className='row'>
            <div className='col'>
              <h1>InlineForm</h1>
              <p>Simple InlineForm</p>
              <InlineForm className="my-2 my-lg-0">
                <Textbox className="mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <Button className="my-2 my-sm-0" type="submit" outlineColor="success" onClick={() => { }}>Search</Button>
              </InlineForm>
  
              <h2>Properties</h2>
              <PropertiesTable caption="Properties of InlineForm" rows={rows} />
              <p>InlineForm supports all native properties of html tag <Code inline={true}>{'<form>'}</Code></p>
  
              <h2>Code</h2>
              <Code>
                {`import { InlineForm, Textbox, Button } from 'rm-lib-ui';
  ...
<InlineForm className="my-2 my-lg-0">
  <Textbox className="mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
  <Button className="my-2 my-sm-0" type="submit" outlineColor="success" onClick={() => { }}>Search</Button>
</InlineForm>`}
              </Code>
            </div>
          </div>
        </div>
      </div>
  );
}