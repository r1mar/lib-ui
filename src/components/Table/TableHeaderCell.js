import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * @typedef TableHeaderCell
 * child of <tr>
 * @property {active|primary|secondary|success|danger|warning|info|dark|light} [color]
 * @property {primary|success|warning|danger|info} [backgroundColor]
 * @property {string} [abbr] Specifies an abbreviated version of the content in a header cell
 * @property {number} [colspan] Specifies the number of columns a header cell should span
 * @property {string} [headers] Specifies one or more header cells a cell is related to
 * @property {number} [rowspan] Specifies the number of rows a header cell should span
 * @property {col|colgroup|row|rowgroup} [scope] Specifies whether a header cell is a header for a column, row, or group of columns or rows
 * @property {Array<object>} children thead or/and tbody html tags
 */

export default function TableHeaderCell(props) {
  const { t } = useTranslation('rm-lib-ui');

  // color
  let colorClass = '';
  const colors = ['active', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'];
  if (props.color && colors.indexOf(props.color) >= 0) {
    colorClass = `table-${props.color}`;
  } else if (props.color) {
    throw new Error(t('wrong-enum-value', { value: props.color, name: 'color', targetComponent: 'TableHeaderCell' }));
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
    <th {...attr}>
      {props.children}
    </th>
  );
}