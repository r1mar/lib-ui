import React from 'react';

/**
 * @typedef BreadcrumbItem
 * @property {boolean} [active]
 */

export default function BreadcrumbItem(props) {
  const attr = {
    ...props,
    className: `breadcrumb-item ${props.className || ''} ${props.active ? 'active' : ''}`,
  };

  return (
  <li {...attr}>
    {props.children}
  </li>
  );
}