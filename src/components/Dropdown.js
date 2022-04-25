import React, { useState } from 'react';

"nav-item nav-link"

export default function Dropdown(props) {
  const [expanded, setExpanded] = useState(false);

  const className = `dropdown ${expanded ? 'show' : ''} ${props.className}`;

  const togglerKinds = ['secondary'];
  let togglerKindClass;
  if(props.kind && togglerKinds.indexOf(props.kind)) {
    togglerKindClass = `btn btn-${props.kind}`
  }

  let toggler;
  const togglerProps = {
    className: `dropdown-toggle ${togglerKindClass} ${props.togglerClassName}`,
    id: "navbarDropdown",
    "data-toggle": "dropdown",
    "aria-haspopup": true,
    "aria-expanded": expanded,
    onClick: () => setExpanded(!expanded)
  };
  if(props.togglerAs === 'a') {
    toggler = (
      <a {...togglerProps} role="button" href="#">
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
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href="#">Something else here</a>
      </div>
    </>);

  if (props.as === 'li') {
    return (
      <li className={className} style={props.style}>
        {content.props.children}
      </li>
    );
  }
  return (
    <div className={className} style={props.style}>
      {content.props.children}
    </div>
  );
}