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
 * @property {string} [props.className]
 * @property {object} [props.style]
 * @returns 
 */
export default function Text(props) {
  const className = `navbar-text ${props.className}`;
  
  return (
    <span className={className} style={props.style}>
      {props.children}
    </span>
  );
}