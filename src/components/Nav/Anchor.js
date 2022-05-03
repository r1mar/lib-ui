import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * @typedef NavbarAnchor
 * 
 * @property {string} href url to external link
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
 *   <NavbarAnchor href="https://github.com">Home</NavbarAnchor>
 * </Navbar>
 * @param {NavbarAnchor} props 
 * @returns  {object} rendered component
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

  return (
    <li id={props.id} className="nav-item">
      <a className={className} href={props.href} style={props.style}>
        {props.children}
        {active && <span className="sr-only">{t('active-label')}</span>}
      </a>
    </li>
  );

}