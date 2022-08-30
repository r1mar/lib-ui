import React from 'react';

/**
 * @typedef Breadcrumb
 * @property {Array<BreadcrumbItem>} children
 */
export default function Breadcrumb(props) {
  return (
    <nav {...props} >
      <ol className="breadcrumb" >
        {props.children}
      </ol>
    </nav>
  );
}