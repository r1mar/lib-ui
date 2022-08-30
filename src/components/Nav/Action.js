import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * @typedef NavbarAction
 * 
 * @property {function} onClick url to external link
 * @property {boolean} [active=false]
 * @property {string} [activeLabel]
 * @property {boolean} [disabled=false]
 * @property {primary | secondary | success | info | danger | warning | light | dark | body | muted | white 
 *          | black-50 | white-50} [color]
 * @property {string|object} children any inline tag or text
 */

export default function Action(props) {
  let className = `nav-link ${props.className || ''} ${props.active ? 'active' : ''} ${props.disabled ? 'disabled' : ''}`;
  
  const { t } = useTranslation('rm-lib-ui');
  
  // set color class
  let  colorClass = '';
  const colors = ['primary','secondary','success','info','danger','warning','light','dark','body','muted',
                  'white','black-50','white-50'];
  if (props.color &&  colors.indexOf(props.color) >= 0) {
    colorClass = `text-${props.color}`;
  } else {
    if (props.color) {
      console.warn(t('wrong-enum-value', { value: props.color, name: 'color', targetComponent: 'NavAction' }));
    }
  }
  className = `${ className } ${ colorClass || '' }`;


  if(!props.onClick) {
    throw new Error(t('missed-prop', {name: 'onClick', targetComponent: 'NavbarAction'}));
  }

  let attr = {
    href: '#',
    ...props,
    className,
    onClick: (e) => {
      e.preventDefault();
      props.onClick();
    }
  };

  delete attr.active;
  delete attr.activeLabel;
  delete attr.disabled;
  delete attr.children;

  return (
    <li className="nav-item">
      <a {...attr}>
        {props.children}
        {props.active && props.activeLabel && <span className="sr-only">{props.activeLabel}</span>}
      </a>
    </li>
  );

}