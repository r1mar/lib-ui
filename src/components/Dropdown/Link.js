import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

/**
 * Subitem of {@link Dropdown}-Component
 * @typedef DropdownLink
 * 
 * @property {string} to url to intern link with react-router-dom
 * @property {string} [activeLabel]
 * @property {boolean} [disabled=false]
 * @property {string|object} children any inline tag or text
 */

export default function Link(props) {
  let className = `dropdown-item ${props.className || ''} ${props.active ? 'active' : ''} ${props.disabled ? 'disabled' : ''}`;

  const { pathname } = useLocation();
  let active = false;
  if (pathname === props.to) {
    className += ' active';
    active = true;
  }

  const { t } = useTranslation('rm-lib-ui');

  if (!props.to) {
    throw new Error(t('missed-prop', { name: 'to', targetComponent: 'DropdownAnchor' }));
  }

  let attr = {
    ...props,
    className
  };

  delete attr.disabled;
  delete attr.children;
  delete attr.activeLabel;

  return (
    <RouterLink {...attr}>
      {props.children}
      {active && props.activeLabel && <span className="sr-only">{props.activeLabel}</span>}
    </RouterLink>
  );

}