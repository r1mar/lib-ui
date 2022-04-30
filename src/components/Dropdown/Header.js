import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Subitem of {@link Dropdown}-Component
 * @typedef DropdownHeader
 * 
 * @property {1|2|3|4|5|6} [importance=6]
 * @property {string} [id]
 * @property {string} [className]
 * @property {object} [style]
 * @property {string|object} children any inline tag or text
 */

/**
 * Subitem of Dropdown-Component. Can navigate to external and internal links(react-router-dom)
 * @example
 * <Dropdown caption="hit me">
 *   <DropdownHeader>Header in Dropdown</DropdownHeader>
 * </Dropdown>
 * @param {DropdownHeader} props 
 * @returns {object} rendered component
 */
export default function Header(props) {
  const attr = {
    id: props.id,
    className: `dropdown-header ${props.className || ''}`,
    style: props.style
  };

  const { t } = useTranslation('rm-lib-ui');

  switch (props.importance) {
    case 1:
      return (<h1 {...attr}>{props.children}</h1>);

    case 2:
      return (<h2 {...attr}>{props.children}</h2>);

    case 3:
      return (<h3 {...attr}>{props.children}</h3>);

    case 4:
      return (<h4 {...attr}>{props.children}</h4>);

    case 5:
      return (<h5 {...attr}>{props.children}</h5>);

    default:
      if (props.importance && props.importance !== 6) {
        console.warn(t('enum-fallback', { value: props.importance, name: 'importance', targetComponent: 'DropdownHeader' }));
      }
      return (<h6 {...attr}>{props.children}</h6>);
  }
}