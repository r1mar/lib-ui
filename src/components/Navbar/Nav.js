import React  from 'react';

/**
 * @typedef (import('./Link').NavbarLink) NavbarLink
 */

/**
 * @typedef NavbarNav
 * @property {Array<NavbarLink|NavbarDropDown>} children
 * @property {string} className
 * @property {object} style
 */

/**
 * Subitem of Navbar-Component. Not for direct use outside of Navbar-Component
 * @param {NavbarNav} props 
 * @returns {object} rendered component
 */

export default function Nav(props) {
  const className = `navbar-nav mr-auto ${props.className}`;

  return (
    <ul className={className} style={props.style}>
      {props.children}
    </ul>
  );
}