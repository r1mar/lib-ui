import React from 'react';
import Nav from '../Nav/Nav';

export default function Sidebar(props) {
  let attr = {
    ...props
  };

  attr.className = `flex-column ${props.className || ''}`;

  return (
    <Nav {...attr}>
      {props.children}
    </Nav>
  );
}