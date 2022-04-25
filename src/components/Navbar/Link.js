import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

/**
 * @typedef NavbarLink
 * 
 * @property {string} [href] url to external link
 * @property {string} [to] url to intern link with react-router-dom
 * @property {boolean} [active=false]
 * @property {boolean} [disabled=false]
 * @property {string} [className]
 * @property {object} [style]
 * @property {string|object} children any inline tag or text
 */

/**
 * Subitem of Nav-Component. Can navigate to external and internal links(react-router-dom)
 * @param {NavbarLink} props 
 * @returns 
 */
export default function Link(props) {
  let className = `nav-link ${props.className || ''} ${props.active ? 'active' : ''} ${props.disabled ? 'disabled' : ''}`;

  const { t } = useTranslation('nav-link');

  if (props.href) {
    return (
      <li className="nav-item">
        <a className={className} href={props.href} style={props.style}>
          {props.children}
          {props.active && <span className="sr-only">{t('active-label')}</span>}
        </a>
      </li>
    );
  }

  if (props.to) {
    return (
      <li className="nav-item">
        <RouterLink className={className} to={props.to} style={props.style}>
          {props.children}
          {props.active && <span className="sr-only">{t('active-label')}</span>}
        </RouterLink>
      </li>
    );
  }

  throw new Error(t('invalid-param'));
}