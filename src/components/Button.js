import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * @typedef Button
 * 
 * @property {primary|secondary|success|warning|danger|info|light|dark|link} [color] Either color or outline color should be specified 
 * @property {primary|secondary|success|warning|danger|info|light|dark} [outlineColor] Either color or outline color should be specified 
 * @property {object|string} children caption string or any tags
 */

/**
 * @example
 * <Button className="my-2 my-sm-0" type="submit" outlineColor="success" onClick={onClick}>Search</Button>
 * @param {Button} props 
 * @returns {object} rendered component
 */
export default function Button(props) {
  const { t } = useTranslation('rm-lib-ui');

  let className = `btn ${props.className || ''}`;

  if(props.outlineColor) {
    const colors = ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'];
    if(colors.indexOf(props.outlineColor) >= 0) {
      className += ` btn-outline-${props.outlineColor}`;
    } else {
      console.warn(t('wrong-enum-value', {value: props.outlineColor, name: 'outlineColor', targetComponent: 'Button'}));
    }
  }

  if(props.color) {
    const colors = ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark', 'link'];
    if(colors.indexOf(props.color) >= 0) {
      className += ` btn-${props.color}`;
    } else {
      console.warn(t('wrong-enum-value', {value: props.color, name: 'color', targetComponent: 'Button'}));
    }
  }
  let attr = {
    ...props,
    className
  };

  delete attr.color;
  delete attr.outlineColor;
  delete attr.children;

  return (
    <button {...attr}>{props.children}</button>
  );
}