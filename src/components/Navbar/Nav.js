import React  from 'react';

/**
 * @typedef NavbarNav
 * @property {Array<NavbarAction,NavbarAnchor|NavbarLink|NavbarDropdown>} children
 */

export default function Nav(props) {
  let attr ={
    ...props,
    className: `navbar-nav mr-auto ${props.className || ''}`
  };

  delete attr.children;

  return (
    <ul {...attr}>
      {props.children}
    </ul>
  );
}