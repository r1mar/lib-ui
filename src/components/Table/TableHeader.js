import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * @typedef TableHeader
 * child of Table
 * @property {light|dark} [color] 
 * @property {Array<object>} children
 */

export default function TableHeader(props) {
  const { t } = useTranslation('rm-lib-ui');

  // color
  let colorClass = '';
  const colors = [ 'dark', 'light' ];
  if(props.color && colors.indexOf(props.color) >= 0) {
    colorClass = `thead-${props.color}`;
  } else if(props.color) {
    throw new Error(t('wrong-enum-value', {value: props.color, name: 'color', targetComponent: 'TableHeader'}));
  }

  const attr = {
    ...props,
    className: `${props.className || ''} 
                ${colorClass}`
  };

  return (
    <thead {...attr}>
      {props.children}
    </thead>
  );
}