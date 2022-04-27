import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * @typedef NavbarLink
 * 
 * @property {string} href url to external link
 * @property {boolean} [disabled=false]
 * @property {string} [className]
 * @property {object} [style]
 * @property {string|object} children any inline tag or text
 */

/**
 * Subitem of Nav-Component. Can navigate to external and internal links(react-router-dom)
 * @example
 * <NavbarAnchor href="http://localhost:3000">Home</NavbarLink>
 * @param {NavbarLink} props 
 * @returns 
 */
export default function Link(props) {
  let className = `nav-link ${props.className || ''} ${props.active ? 'active' : ''} ${props.disabled ? 'disabled' : ''}`;

  if((window.location.origin + window.location.pathname) === props.href) {
    className += ' active';
  }

  const { t } = useTranslation('nav-link');

  return (
    <li className="nav-item">
      <a className={className} href={props.href} style={props.style}>
        {props.children}
        {props.active && <span className="sr-only">{t('active-label')}</span>}
      </a>
    </li>
  );

}