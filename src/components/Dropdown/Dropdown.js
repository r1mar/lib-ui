import React, { useState } from 'react';

/**
 * @typedef Dropdown
 * @property {string} [caption]
 * @property {'primary'|'secondary'|'success'|'warning'|'danger'|'info'|'dark'|'light'|'link'} [color]
 * @property {Array<DropdownHeader|DropdownAction|DropdownAnchor|DropdownDivider|DropdownLink>} children
 */

export default function Dropdown(props) {
  const [expanded, setExpanded] = useState(false);

  const className = `dropdown ${expanded ? 'show' : ''} ${props.className}`;

  const togglerKinds = ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'dark', 'light', 'link'];
  let togglerKindClass;
  if (props.color && togglerKinds.indexOf(props.color) >= 0) {
    togglerKindClass = `btn btn-${props.color}`
  }

  let toggler;
  const togglerProps = {
    className: `dropdown-toggle ${togglerKindClass} ${props.togglerClassName}`,
    id: "navbarDropdown",
    "data-toggle": "dropdown",
    "aria-haspopup": true,
    "aria-expanded": expanded,
    onClick: (e) => {
      e.preventDefault();
      setExpanded(!expanded);
    }
  };
  if (props.togglerAs === 'a') {
    toggler = (
      <a {...togglerProps} role="button" href="/toggler">
        {props.caption}
      </a>
    );
  } else {
    toggler = (
      <button {...togglerProps} type="button">
        {props.caption}
      </button>
    );
  }

  const contentClassName = expanded ? "dropdown-menu show" : "dropdown-menu";
  const content = (
    <>
      {toggler}
      <div className={contentClassName} aria-labelledby="navbarDropdown">
        {props.children}
      </div>
    </>);

  let attr = {
    ...props,
    className
  };

  delete attr.togglerClassName;
  delete attr.as;
  delete attr.togglerAs;
  delete attr.caption;
  delete attr.color;

  if (props.as === 'li') {
    return (
      <li {...attr}>
        {content.props.children}
      </li>
    );
  }
  return (
    <div {...attr}>
      {content.props.children}
    </div>
  );
}