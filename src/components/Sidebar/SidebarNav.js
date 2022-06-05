import React from 'react';
import Nav from '../Nav/Nav';

export default function Sidebar(props) {
  let attr = {
    ...props
  };

  attr.className = `flex-column ${props.className || ''}`;

  return (
    <div>
      {props.header &&
        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          {props.header}
        </h6>
      }

      <Nav {...attr}>
        {props.children}
      </Nav>
    </div>
  );
}