import React from 'react';

/**
 * Subitem of {@link Dropdown}-Component
 * @typedef DropdownDivider
 * 
 * @property {string|object} children any inline tag or text
 */

export default function Divider(props) {
  const attr = {
    ...props,
    className: `dropdown-divider ${props.className || ''}`
  };

  return (
    <div {...attr} />
  );
}