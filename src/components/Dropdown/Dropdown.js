import React, { useState } from 'react';

/**
 * @typedef Dropdown
 * @property {string} [caption]
 * @property {'primary'|'secondary'|'success'|'warning'|'danger'|'info'|'dark'|'light'|'link'} [kind]
 * @property {string} [id]
 * @property {string} [className]
 * @property {object} [style]
 * @property {Array<DropdownHeader|DropdownItem|DropdownDevider>} children
 */

/**
 * @example
 * import { Dropdown, DropdownDevider, DropdownAction, DropdownAnchor, DropdownLink } from 'rm-lib-ui';
 * 
 * <Dropdown kind="secondary" caption="Dropdown">
 *   <DropdownAnchor href="home1">Action</DropdownItem>
 *   <DropdownLink to="/home2">Another action</DropdownItem>
 *   <DropdownDevider />
 *   <DropdownAction onClick={onClick}>Something else here</DropdownAction>
 * </Dropdown>
 * @param {Dropdown} props 
 * @returns {object} rendered components
 */

export default function Dropdown(props) {
  const [expanded, setExpanded] = useState(false);

  const className = `dropdown ${expanded ? 'show' : ''} ${props.className}`;

  const togglerKinds = ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'dark', 'light', 'link'];
  let togglerKindClass;
  if(props.kind && togglerKinds.indexOf(props.kind) >= 0) {
    togglerKindClass = `btn btn-${props.kind}`
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
  if(props.togglerAs === 'a') {
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

  if (props.as === 'li') {
    return (
      <li id={props.id} className={className} style={props.style}>
        {content.props.children}
      </li>
    );
  }
  return (
    <div id={props.id} className={className} style={props.style}>
      {content.props.children}
    </div>
  );
}