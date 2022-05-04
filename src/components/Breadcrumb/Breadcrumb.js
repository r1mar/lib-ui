import React from 'react';

/**
 * @typedef Breadcrumb
 * @property {string} [divider] 
 * @property {string} [ariaLabel]
 * @property {Array<BreadcrumbItem>} children
 * @property {string} [id]
 * @property {string} [className]
 * @property {string} [style]
 */
export default function Breadcrumb(props) {
  const attr = {
    id: props.id,
    className: `breadcrumb ${props.className || ''}`,
    style: props.dividers ? {
      ...props.style,
      '--bs-breadcrumb-divider': props.divider
    } : props.style,
    "aria-label": props.ariaLabel
  };

  return (
    <nav {...attr} >
      <ol className="breadcrumb" >
        {props.children}
      </ol>
    </nav>
  );
}