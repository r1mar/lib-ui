import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

/**
 * @typedef DropdownLink
 * 
 * @property {string} to url to intern link with react-router-dom
 * @property {boolean} [disabled=false]
 * @property {string} [id]
 * @property {string} [className]
 * @property {object} [style]
 * @property {string|object} children any inline tag or text
 */

/**
 * Subitem of Nav-Component. Can navigate to internal links(react-router-dom)
 * @example
 * import { Dropdown, DropdownLink } from 'rm-lib-ui';
 * ...
 * <Dropdown>
 *   <DropdownLink to="/home">Home</DropdownLink>
 * </Dropdown>
 * @param {DropdownLink} props 
 * @returns 
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

  return (
    <RouterLink id={props.id} className={className} to={props.to} style={props.style}>
      {props.children}
      {active && <span className="sr-only">{t('active-label')}</span>}
    </RouterLink>
  );

}