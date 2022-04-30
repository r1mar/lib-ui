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
 * @property {string} [id]
 * @property {string} [props.className]
 * @property {object} [props.style]
 * @returns {object} rendered components
 */
export default function Text(props) {
  const className = `navbar-text ${props.className}`;
  
  return (
    <span id={props.id} className={className} style={props.style}>
      {props.children}
    </span>
  );
}