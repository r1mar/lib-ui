import React from 'react';

/**
 * @typedef BreadcrumbItem
 * @property {boolean} [active]
 * @property {string} [ariaCurrent]
 * @property {string} [id]
 * @property {string} [className]
 * @property {string} [style]
 */

export default function BreadcrumbItem(props) {
  const attr = {
    id: props.id,
    className: `breadcrumb-item ${props.className || ''} ${props.active ? 'active' : ''}`,
    style: props.style,
    "aria-current": props.active ? props.ariaCurrent : undefined
  };

  return (
  <li {...attr}>
    {props.children}
  </li>
  );
}