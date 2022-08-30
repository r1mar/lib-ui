import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * @typedef Dropdown
 * @property {string} [caption]
 * @property {primary|secondary|success|warning|danger|info|dark|light|link} [color] 
 * @property {primary|secondary|success|warning|danger|info|dark|light||body|muted',
 *           |white|black-50|white-50} [textColor]
 * @property {Array<DropdownHeader|DropdownAction|DropdownAnchor|DropdownDivider|DropdownLink>} children
 */

export default function Dropdown(props) {
  const [expanded, setExpanded] = useState(false);

  const className = `dropdown ${expanded ? 'show' : ''} ${props.className}`;

  const { t } = useTranslation('rm-lib-ui');

  const togglerKinds = ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'dark', 'light', 'link'];
  let togglerKindClass;
  if (props.color && togglerKinds.indexOf(props.color) >= 0) {
    togglerKindClass = `btn btn-${props.color}`
  } else if (props.color) {
    console.warn(t('wrong-enum-value', { value: props.color, name: 'color', targetComponent: 'Dropdown' }));
  }

  // set textColor class
  let textColorClass = '';
  const textColors = ['primary', 'secondary', 'success', 'info', 'danger', 'warning', 'light', 'dark', 'body', 'muted',
    'white', 'black-50', 'white-50'];
  if (props.textColor && textColors.indexOf(props.textColor) >= 0) {
    textColorClass = `text-${props.textColor}`;
  } else {
    if (props.textColor) {
      console.warn(t('wrong-enum-value', { value: props.textColor, name: 'textColor', targetComponent: 'Dropdown' }));
    }
  }

  let toggler;
  const togglerProps = {
    className: `dropdown-toggle ${togglerKindClass || ''} ${props.togglerClassName || ''} ${textColorClass || ''}`,
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
  delete attr.textColor;

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