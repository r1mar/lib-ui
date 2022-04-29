import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * @callback onChange
 * @param {object} e 
 * @returns 
 */

/**
 * @typedef Textbox
 * 
 * @property {string} [placeholder]
 * @property {string} [ariaLabel]
 * @property {onChange} [onChange]
 * @property {email|number|password|search|tel|text|url} [type='text']
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [className]
 * @property {string} [style]
 */

/**
 * @example
 * <Textbox className="mr-sm-2" type="search" placeholder="Search" ariaLabel="Search" />
 * @param {Textbox} props 
 * @returns {object} rendered component
 */
export default function Textbox(props) {
  const attr = {
    placeholder: props.placeholder,
    'aria-label': props.ariaLabel,
    onChange: props.onChange,
    id: props.id,
    name: props.name,
    className: `form-control ${props.className || ''}`,
    style: props.style
  };

  const { t } = useTranslation('rm-lib-ui');

  const types = ['email', 'number', 'password', 'search', 'tel', 'text', 'url'];
  let type = 'text';
  if(props.type && types.indexOf(props.type) >= 0) {
    type = props.type;
  } else if(props.type) {
    console.warn(t('enum-fallback', {value: props.type, name: 'type', targetComponent: 'Textbox'}));
  }

  return (
    <input {...attr} type={type} />
  );
}