import React from 'react';

/**
 * @example
 * import { Navbar, NavbarText } from 'rm-lib-ui;
 * ...
 * <Navbar>
 *   <NavbarText>some text</NavbarText>
 * </Navbar>
 * @param {object} props
 * @param {string} props.children 
 * @returns {object} rendered components
 */
export default function Text(props) {
  let attr ={
    ...props,
    className: `navbar-text ${props.className}`
  };

  delete attr.children;
  
  return (
    <span {...attr}>
      {props.children}
    </span>
  );
}