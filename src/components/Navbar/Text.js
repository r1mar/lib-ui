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
 * @returns 
 */
export default function Text(props) {
  return (
    <span class="navbar-text">
      {props.children}
    </span>
  );
}