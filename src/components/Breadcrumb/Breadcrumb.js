import React from 'react';

/**
 * @typedef Breadcrumb
 * @property {string} [divider] 
 * @property {string} [aria-label]
 * @property {Array<BreadcrumbItem>} children
 */
export default function Breadcrumb(props) {
  let attr = {
    ...props,
    style: props.dividers ? {
      ...props.style,
      '--bs-breadcrumb-divider': props.divider
    } : props.style
  };

  delete attr.divider;

  return (
    <nav {...attr} >
      <ol className="breadcrumb" >
        {props.children}
      </ol>
    </nav>
  );
}