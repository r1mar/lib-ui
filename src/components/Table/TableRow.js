import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * @typedef TableRow
 * child of TableHeader or <tbody>
 * @property {active|primary|secondary|success|danger|warning|info|dark|light} [color]
 * @property {primary|success|warning|danger|info} [backgroundColor]
 * @property {Array<object>} children thead or/and tbody html tags
 */

export default function TableRow(props) {
  const { t } = useTranslation('rm-lib-ui');

  // color
  let colorClass = '';
  const colors = ['active', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'];
  if (props.color && colors.indexOf(props.color) >= 0) {
    colorClass = `table-${props.color}`;
  } else if (props.color) {
    throw new Error(t('wrong-enum-value', { value: props.color, name: 'color', targetComponent: 'TableRow' }));
  }

  // backgroundcolor
  let backgroundColorClass = '';
  const backgroundColors = ['active', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'];
  if (props.backgroundColor && backgroundColors.indexOf(props.backgroundColor) >= 0) {
    backgroundColorClass = `bg-${props.backgroundColor}`;
  } else if (props.backgroundColor) {
    throw new Error(t('wrong-enum-value', { value: props.backgroundColor, name: 'backgroundColor', targetComponent: 'TableCell' }));
  }

  let attr = {
    ...props,
    className: `${props.className || ''} 
                ${colorClass} 
                ${backgroundColorClass}`
  };

  return (
    <tr {...attr}>
      {props.children}
    </tr>
  );
}