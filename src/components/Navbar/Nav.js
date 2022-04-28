import React  from 'react';

/**
 * @typedef (import('./Link').NavbarLink) NavbarLink
 * @typedef (import('./Anchor').Anchor) NavbarAnchor
 * @typedef (import('./Dropdown').Dropdown) NavbarDropdown
 * @typedef (import('./Action').Action) NavbarAction
 */

/**
 * @typedef NavbarNav
 * @property {Array<NavbarAction,NavbarAnchor|NavbarLink|NavbarDropDown>} children
 * @property {string} className
 * @property {object} style
 */

/**
 * Subitem of Navbar-Component. Not for direct use outside of Navbar-Component
 * @example
 * import { NavbarAnchor, NavbarDropDown, NavbarLink } from 'rm-lib-ui'.
 * ...
 * <NavbarNav>
 *   <NavbarAnchor href="http://localhost:3000">Home</NavbarAnchor>
 *   <NavbarLink to="#">Link</NavbarLink>
 *   <NavbarDropdown caption="Dropdown" />
 *   <NavbarLink to="#" disabled={true}>Disabled</NavbarLink>
 * </NavbarNav>
 * @param {NavbarNav} props 
 * @returns {object} rendered component
 */

export default function Nav(props) {
  const className = `navbar-nav mr-auto ${props.className || ''}`;

  return (
    <ul className={className} style={props.style}>
      {props.children}
    </ul>
  );
}