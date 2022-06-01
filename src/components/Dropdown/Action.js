import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Triggers a callback when you click on it.
 * Subitem of {@link Dropdown}-Component.
 * @typedef DropdownAction
 * 
 * @property {function} onClick click event handler
 * @property {boolean} [active=false] 
 * @property {string} [activeLabel]
 * @property {boolean} [disabled=false]
 * @property {*} children any inline tag or text
 *
 * @example
 * import { Dropdown, DropdownAction } from 'rm-lib-ui';
 * ...
 * <Dropdown caption="hit me">
 *   <DropdownAction onClick={onClick}>call Home</DropdownAction>
 * </DropDown>
 */

export default function Action(props) {
  const { t } = useTranslation('rm-lib-ui');

  if (!props.onClick) {
    throw new Error(t('missed-prop', { name: 'onClick', targetComponent: 'DropdownAction' }));
  }

  let attr = {
    ...props,
    className: `dropdown-item ${props.className || ''} ${props.active ? 'active' : ''} ${props.disabled ? 'disabled' : ''}`,
    onClick: (e) => {
      e.preventDefault();
      props.onClick();
    },
    href: '#'
  }

  delete attr.active;
  delete attr.disabled;
  delete attr.activeLabel;

  return (
    <a {...attr}>
      {props.children}
      {props.active && props.activeLabel && <span className="sr-only">{props.activeLabel}</span>}
    </a>
  );

}