import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Triggers a callback when you click on it.
 * Subitem of {@link Dropdown}-Component.
 * @typedef DropdownAction
 * 
 * @property {function} onClick click event handler
 * @property {boolean} [active=false] 
 * @property {boolean} [disabled=false]
 * @property {string} [id]
 * @property {string} [className]
 * @property {object} [style]
 * @property {*} children any inline tag or text
 *
 * @example
 * import { Dropdown, DropdownAction } from 'rm-lib-ui';
 * ...
 * <Dropdown caption="hit me">
 *   <DropdownAction onClick={onClick}>call Home</DropdownAction>
 * </DropDown>
 */

/**
 * @param {DropdownAction} props 
 * @returns {React.ReactElement} rendered components
 */
export default function Action(props) {
  let className = `dropdown-item ${props.className || ''} ${props.active ? 'active' : ''} ${props.disabled ? 'disabled' : ''}`;

  const { t } = useTranslation('rm-lib-ui');

  if (!props.onClick) {
    throw new Error(t('missed-prop', { name: 'onClick', targetComponent: 'DropdownAction' }));
  }

  const onClick = (e) => {
    e.preventDefault();
    props.onClick();
  };

  return (
    <a href="/action" id={props.id} className={className} onClick={onClick} style={props.style}>
      {props.children}
      {props.active && <span className="sr-only">{t('active-label')}</span>}
    </a>
  );

}