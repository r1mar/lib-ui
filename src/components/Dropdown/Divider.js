import React from 'react';

/**
 * Subitem of {@link Dropdown}-Component
 * @typedef DropdownDivider
 * 
 * @property {string} [id]
 * @property {string} [className]
 * @property {object} [style]
 * @property {string|object} children any inline tag or text
 */

/**
 * Subitem of Dropdown-Component.
 * @example
 * <Dropdown caption="hit me">
 *   <DropdownDivider />
 * </Dropdown>
 * @param {DropdownDivider} props 
 * @returns {object} rendered component
 */
export default function Divider(props) {
  const attr = {
    id: props.id,
    className: `dropdown-divider ${props.className || ''}`,
    style: props.style
  };

  return (
    <div {...attr} />
  );
}