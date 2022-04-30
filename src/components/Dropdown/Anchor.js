import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Can navigate to external links
 * Subitem of {@link Dropdown}-Component
 * @typedef DropdownAnchor
 * 
 * @property {string} href url to external link
 * @property {boolean} [disabled=false]
 * @property {string} [id]
 * @property {string} [className]
 * @property {object} [style]
 * @property {string|object} children any inline tag or text
 *  
 * @example
 * <Dropdown caption="hit me">
 *   <DropdownAnchor href="https://github.com">Home</DropdownAnchor>
 * </Dropdown>
 */

/**
 * @param {DropdownAnchor} props 
 * @returns {object} rendered component
 */
export default function Anchor(props) {
  let className = `dropdown-item ${props.className || ''} ${props.disabled ? 'disabled' : ''}`;

  let active = false;
  if (window.location.pathname === props.href) {
    className += ' active';
    active = true;
  }

  const { t } = useTranslation('rm-lib-ui');

  if (!props.href) {
    throw new Error(t('missed-prop', { name: 'href', targetComponent: 'DropdownAnchor' }));
  }

  return (
    <a id={props.id} className={className} href={props.href} style={props.style}>
      {props.children}
      {active && <span className="sr-only">{t('active-label')}</span>}
    </a>
  );

}