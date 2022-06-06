import React from 'react';
import { Nav } from 'rm-lib-ui';

export default function References(props) {
  return (
    <div className="bg-light">
      <div className="container-md">
        <div className='row'>
          <div className='col'>
            <Nav breakAt="allways" header={props.header || 'References'}>
              {props.children}
            </Nav>
          </div>
        </div>
      </div>
    </div>
  );
}