import React from 'react';
import { Nav } from 'rm-lib-ui';

export default function References(props) {
  return (
    <div className="bg-light">
      <div className="container-md">
        <div className='row'>
          <div className='col'>
            <h2>References</h2>
            <Nav breakAt="allways">
              {props.children}
            </Nav>
          </div>
        </div>
      </div>
    </div>
  );
}