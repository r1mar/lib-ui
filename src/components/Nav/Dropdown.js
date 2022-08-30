import React from 'react';
import InnerDropdown from '../Dropdown/Dropdown';

/**
 * @typedef NavbarDropdown
 * 
 * @property {string} [caption]
 * @property {primary|secondary|success|info|danger|warning|light|dark|body|muted',
 *                 'white|black-50|white-50} [color]
 * @property {Array<DropdownHeader|DropdownAction|DropdownAnchor|DropdownDivider|DropdownLink>} children
 */

export default function Dropdown(props) {
  let attr = {
    ...props
  };

  attr.className = `nav-item ${attr.className}`;

  if(attr.color) {
    delete attr.color;
    attr.textColor = props.color;
  }

  return (
    <InnerDropdown {...attr} togglerClassName="nav-link" as="li" togglerAs="a">

    </InnerDropdown>
  );
}