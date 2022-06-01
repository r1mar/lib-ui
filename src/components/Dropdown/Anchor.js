import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Can navigate to external links
 * Subitem of {@link Dropdown}-Component
 * @typedef DropdownAnchor
 * 
 * @property {string} href url to external link
 * @property {string} [activeLabel] label for screen reader by current uri
 * @property {boolean} [disabled=false]
 * @property {string|object} children any inline tag or text
 *  
 * @example
 * <Dropdown caption="hit me">
 *   <DropdownAnchor href="https://github.com">Home</DropdownAnchor>
 * </Dropdown>
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

  const attr = {
    ...props,
    className
  };

  delete attr.disabled;
  delete attr.activeLabel;

  return (
    <a {...attr}>
      {props.children}
      {active && props.activeLabel && <span className="sr-only">{props.activeLabel}</span>}
    </a>
  );

}