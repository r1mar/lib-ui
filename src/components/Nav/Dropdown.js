import React from 'react';
import InnerDropdown from '../Dropdown/Dropdown';

/**
 * @typedef NavbarDropdown
 * 
 * @property {string} [caption]
 * @property {Array<DropdownHeader|DropdownAction|DropdownAnchor|DropdownDivider|DropdownLink>} children
 */

export default function Dropdown(props) {
  return (
    <InnerDropdown {...props} className="nav-item" togglerClassName="nav-link" as="li" togglerAs="a">
      
    </InnerDropdown>
  );
}