import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * @typedef NavbarAnchor
 * 
 * @property {string} href url to external link
 * @property {boolean} [disabled=false]
 * @property {string} [activeLabel]
 * @property {primary | secondary | success | info | danger | warning | light | dark | body | muted | white 
 *          | black-50 | white-50} [color]
 * @property {string|object} children any inline tag or text
 */

export default function Anchor(props) {
  let className = `nav-link ${props.className || ''} ${props.disabled ? 'disabled' : ''}`;

  let active = false;
  if (window.location.pathname === props.href) {
    className += ' active';
    active = true;
  }

  const { t } = useTranslation('rm-lib-ui');

  // set color class
  let colorClass = '';
  const colors = ['primary','secondary','success','info','danger','warning','light','dark','body','muted',
                  'white','black-50','white-50'];
  if (props.color && colors.indexOf(props.color) >= 0) {
    colorClass = `text-${props.color}`;
  } else {
    if (props.color) {
      console.warn(t('wrong-enum-value', { value: props.color, name: 'color', targetComponent: 'NavAction' }));
    }
  }
  className = `${className} ${colorClass || ''}`;

  if (!props.href) {
    throw new Error(t('missed-prop', { name: 'href', targetComponent: 'NavbarAnchor' }));
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