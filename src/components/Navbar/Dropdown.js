import React from 'react';
import InnerDropdown from '../Dropdown';

/**
 * @typedef Dropdown
 * @property {string} [caption]
 * @property {string} [className]
 * @property {object} [style]
 * @property {Array<DropdownHeader|DropdownItem|DropdownDevider>} children
 */

/**
 * @example
 * import { Dropdown, DropdownDevider, DropdownItem } from 'rm-lib-ui';
 * 
 * <Dropdown kind="secondary" caption="Dropdown">
 *   <DropdownItem href="#">Action</DropdownItem>
 *   <DropdownItem href="#">Another action</DropdownItem>
 *   <DropdownDevider />
 *   <DropdownItem href="#">Something else here</DropdownItem>
 * </Dropdown>
 * @param {Dropdown} props 
 * @returns {object} rendered components
 */
export default function Dropdown(props) {
  return (
    <InnerDropdown {...props} className="nav-item" togglerClassName="nav-link" as="li" togglerAs="a">
      
    </InnerDropdown>
  );
}