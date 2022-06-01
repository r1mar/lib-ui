import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

/**
 * @typedef NavbarLink
 * 
 * @property {string} to url to intern link with react-router-dom
 * @property {boolean} [disabled=false]
 * @property {string} [activeLabel]
 * @property {string|object} children any inline tag or text
 */

export default function Link(props) {
  let className = `nav-link ${props.className || ''} ${props.active ? 'active' : ''} ${props.disabled ? 'disabled' : ''}`;

  const { pathname } = useLocation();
  let active = false;
  if(pathname === props.to) {
    className += ' active';
    active = true;
  }

  const { t } = useTranslation('rm-lib-ui');

  if(!props.to) {
    throw new Error(t('missed-prop', {name: 'to', targetComponent: 'NavbarLink'}));
  }

  let attr = {
    ...props,
    className
  };

  delete attr.active;
  delete attr.activeLabel;
  delete attr.disabled;
  delete attr.children;

  return (
    <li className="nav-item">
      <RouterLink {...attr}>
        {props.children}
        {active && props.activeLabel && <span className="sr-only">{props.activeLabel}</span>}
      </RouterLink>
    </li>
  );

}