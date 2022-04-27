import React from 'react';
import { useTranslation } from 'react-i18next';
import useValidation from '../../hooks/useValidation';

/**
 * @typedef NavbarAnchor
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
 * <NavbarAnchor href="https://github.com">Home</NavbarAnchor>
 * @param {NavbarAnchor} props 
 * @returns 
 */
export default function Anchor(props) {
  let className = `nav-link ${props.className || ''} ${props.active ? 'active' : ''} ${props.disabled ? 'disabled' : ''}`;

  if(window.location.pathname === props.href) {
    className += ' active';
  }

  const { t } = useTranslation('nav-anchor');

  const { assertRequired } = useValidation('NavbarAnchor', useTranslation('use-validation'));
  assertRequired(props, 'href');

  return (
    <li className="nav-item">
      <a className={className} href={props.href} style={props.style}>
        {props.children}
        {props.active && <span className="sr-only">{t('active-label')}</span>}
      </a>
    </li>
  );

}