import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * @typedef Table
 * @property {primary|success|danger|info|warning|active|secondary|light|dark} [color=light] 
 * @property {boolean} [striped]
 * @property {bordered|borderless} [border]
 * @property {boolean} [hover]
 * @property {boolean} [small]
 * @property {string} [caption]
 * @property {-|sm|md|lg|xl} [responsive]
 * @property {Array<TableHead|object>} children thead or/and tbody html tags
 */

export default function Table(props) {
  const { t } = useTranslation('rm-lib-ui');

  // color
  let colorClass = 'light';
  const colors = ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'dark', 'light', 'active'];
  if (props.color && colors.indexOf(props.color) >= 0) {
    colorClass = `table-${props.color}`;
  } else if (props.color) {
    console.warn(t('enum-fallback', { value: props.color, name: 'color', targetComponent: 'Table' }));
  }

  // border
  let borderClass = '';
  const borders = ['bordered', 'borderless'];
  if (props.border && borders.indexOf(props.border) >= 0) {
    borderClass = `table-${props.border}`;
  } else if (props.border) {
    throw new Error(t('wrong-enum-value', { value: props.border, name: 'border', targetComponent: 'Table' }));
  }

  // responsive
  let responsiveClass = '';
  const responsives = ['-', 'sm', 'md', 'lg', 'xl'];
  if (props.responsive && responsives.indexOf(props.responsive) >= 0) {
    responsiveClass = props.responsive === '-' ? 'table-responsive' : `table-responsive-${props.responsive}`;
  } else if (props.responsive) {
    throw new Error(t('wrong-enum-value', { value: props.responsive, name: 'responsive', targetComponent: 'Table' }));
  }

  const attr = {
    ...props,
    className: `table ${props.className || ''} 
                      ${colorClass} 
                      ${props.striped ? 'table-striped' : ''} 
                      ${borderClass} 
                      ${props.hover ? 'table-hover' : ''} 
                      ${props.small ? 'table-sm' : ''}`
  };

  const table = (
    <table {...attr}>
      {props.caption && <caption>{props.caption}</caption>}
      {props.children}
    </table>
  );
  
  if(responsiveClass) {
    return (
      <div className={responsiveClass}>
        {table}
      </div>
    );
  }

  return table;
}