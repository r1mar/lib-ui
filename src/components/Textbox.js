import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * @typedef Textbox
 * 
 * @property {string} [value]
 * @property {string} [placeholder]
 * @property {email|number|password|search|tel|text|url} [type='text']
 * @property {string} [name]
 */

export default function Textbox(props) {
  let attr = {
    ...props,
    className: `form-control ${props.className || ''}`
  };

  const { t } = useTranslation('rm-lib-ui');

  const types = ['email', 'number', 'password', 'search', 'tel', 'text', 'url'];
  let type = 'text';
  if(props.type && types.indexOf(props.type) >= 0) {
    type = props.type;
  } else if(props.type) {
    console.warn(t('enum-fallback', {value: props.type, name: 'type', targetComponent: 'Textbox'}));
  }
  delete attr.type;

  return (
    <input {...attr} type={type} />
  );
}