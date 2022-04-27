import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useValidation from '../../hooks/useValidation';

/**
 * @typedef NavbarLink
 * 
 * @property {string} to url to intern link with react-router-dom
 * @property {boolean} [disabled=false]
 * @property {string} [className]
 * @property {object} [style]
 * @property {string|object} children any inline tag or text
 */

/**
 * Subitem of Nav-Component. Can navigate to external and internal links(react-router-dom)
 * @example
 * import { NavbarLink } from 'rm-lib-ui';
 * ...
 * <NavbarLink to="/home">Home</NavbarLink>
 * @param {NavbarLink} props 
 * @returns 
 */
export default function Link(props) {
  let className = `nav-link ${props.className || ''} ${props.active ? 'active' : ''} ${props.disabled ? 'disabled' : ''}`;

  const { pathname } = useLocation();
  if(pathname === props.to) {
    className += ' active';
  }

  const { t } = useTranslation('nav-link');

  const { assertRequired } = useValidation('NavbarLink', useTranslation('use-validation'));
  assertRequired(props, 'to');

  return (
    <li className="nav-item">
      <RouterLink className={className} to={props.to} style={props.style}>
        {props.children}
        {props.active && <span className="sr-only">{t('active-label')}</span>}
      </RouterLink>
    </li>
  );

}