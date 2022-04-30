import React from 'react';
import InnerDropdown from '../Dropdown/Dropdown';

/**
 * @typedef NavbarDropdown
 * @property {string} [caption]
 * @property {string} [id]
 * @property {string} [className]
 * @property {object} [style]
 * @property {Array<DropdownHeader|DropdownAction|DropdownAnchor|DropdownDivider|DropdownLink>} children
 */

/**
 * @example
 * import { Navbar, NavbarDropdown, NavbarNav, DropdownAnchor } from 'rm-lib-ui';
 * <Navbar>
 *   <NavbarNav>
 *     <NavbarDropdown caption="Dropdown">
 *       <DropdownAnchor href="#">Anchor</DropdownAnchor>
 *     </NavbarDropdown>
 *   </NavbarNav>
 * </Navbar>
 * @param {Dropdown} props 
 * @returns {object} rendered components
 */
export default function Dropdown(props) {
  return (
    <InnerDropdown id={props.id} {...props} className="nav-item" togglerClassName="nav-link" as="li" togglerAs="a">
      
    </InnerDropdown>
  );
}