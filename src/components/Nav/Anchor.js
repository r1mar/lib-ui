import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * @typedef NavbarAnchor
 * 
 * @property {string} href url to external link
 * @property {boolean} [disabled=false]
 * @property {string} [activeLabel]
 * @property {string|object} children any inline tag or text
 */

export default function Anchor(props) {
  let className = `nav-link ${props.className || ''} ${props.disabled ? 'disabled' : ''}`;

  let active = false;
  if(window.location.pathname === props.href) {
    className += ' active';
    active = true;
  }

  const { t } = useTranslation('rm-lib-ui');

  if(!props.href) {
    throw new Error(t('missed-prop', {name: 'href', targetComponent: 'NavbarAnchor'}));
  }

  let attr = {
    ...props,
    className
  };

  delete attr.activeLabel;
  delete attr.disabled;
  delete attr.children;

  return (
    <li className="nav-item">
      <a {...attr}>
        {props.children}
        {active && <span className="sr-only">{props.activeLabel}</span>}
      </a>
    </li>
  );

}