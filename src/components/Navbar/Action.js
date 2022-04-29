import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * @callback click
 * @param {object} e 
 * @returns {void}
 */

/**
 * @typedef NavbarAction
 * 
 * @property {click} onClick url to external link
 * @property {boolean} [active=false]
 * @property {boolean} [disabled=false]
 * @property {string} [id]
 * @property {string} [className]
 * @property {object} [style]
 * @property {string|object} children any inline tag or text
 */

/**
 * Subitem of Nav-Component. Can navigate to external and internal links(react-router-dom)
 * @example
 * <Navbar caption="hit me">
 *   <NavbarAction href="https://github.com">Home</NavbarAction>
 * </Navbar>
 * @param {NavbarAction} props 
 * @returns 
 */
export default function Action(props) {
  let className = `nav-link ${props.className || ''} ${props.active ? 'active' : ''} ${props.disabled ? 'disabled' : ''}`;

  const { t } = useTranslation('rm-lib-ui');

  if(!props.onClick) {
    throw new Error(t('missed-prop', {name: 'onClick', targetComponent: 'NavbarAction'}));
  }

  const onClick = (e) => {
    e.preventDefault();
    props.onClick();
  };

  return (
    <li id={props.id} className="nav-item">
      <a href="/action" className={className} onClick={onClick} style={props.style}>
        {props.children}
        {props.active && <span className="sr-only">{t('active-label')}</span>}
      </a>
    </li>
  );

}