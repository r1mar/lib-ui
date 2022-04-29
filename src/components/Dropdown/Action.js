import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * @callback click
 * @param {object} e 
 * @returns {void}
 */

/**
 * @typedef DropdownAction
 * 
 * @property {click} onClick click event handler
 * @property {boolean} [active=false]
 * @property {boolean} [disabled=false]
 * @property {string} [className]
 * @property {object} [style]
 * @property {string|object} children any inline tag or text
 */

/**
 * Subitem of Dropdown-Component. Can navigate to external and internal links(react-router-dom)
 * @example
 * import { Dropdown, DropdownAction } from 'rm-lib-ui';
 * ...
 * <Dropdown caption="hit me">
 *   <DropdownAction onClick={onClick}>call Home</DropdownAction>
 * </DropDown>
 * @param {DropdownAction} props 
 * @returns 
 */
export default function Action(props) {
  let className = `dropdown-item ${props.className || ''} ${props.active ? 'active' : ''} ${props.disabled ? 'disabled' : ''}`;

  const { t } = useTranslation('rm-lib-ui');

  if(!props.onClick) {
    throw new Error(t('missed-prop', {name: 'onClick', targetComponent: 'DropdownAction'}));
  }

  const onClick = (e) => {
    e.preventDefault();
    props.onClick();
  };

  return (
    <li className="nav-item">
      <a href="/action" className={className} onClick={onClick} style={props.style}>
        {props.children}
        {props.active && <span className="sr-only">{t('active-label')}</span>}
      </a>
    </li>
  );

}