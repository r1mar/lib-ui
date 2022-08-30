import React from 'react';
import { Nav } from 'rm-lib-ui';

export default function References(props) {
  const attr = {
    className: `bg-light ${props.className || ''}`
  };
  return (
    <div {...attr}>
      <div className="container-md">
        <div className='row'>
          <div className='col'>
            <Nav breakAt={props.breakAt || 'allways'} header={props.header || 'References'}>
              {props.children}
            </Nav>
          </div>
        </div>
      </div>
    </div>
  );
}