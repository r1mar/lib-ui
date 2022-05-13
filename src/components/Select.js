import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * @typedef Select
 * 
 * @property {string} [defaultValue]
 * @property {string} [value]
 * @property {sm|lg} [sizeCategory] font and text box height and width
 * @property {function} [onChange]
 * @property {boolean} [autofocus]	Specifies that the drop-down list should automatically get focus when the page loads
 * @property {boolean} [disabled]	Specifies that a drop-down list should be disabled
 * @property {string} [form]	Defines which form the drop-down list belongs to
 * @property {boolean} [multiple]	Specifies that multiple options can be selected at once
 * @property {string}	[name]	Defines a name for the drop-down list
 * @property {boolean} [required]	Specifies that the user is required to select a value before submitting the form
 * @property {number } [size]	Defines the number of visible options in a drop-down list
 * @property {Array<object>} children html option tags
 */

export default function Select(props) {
  const { t } = useTranslation('rm-lib-ui');

  // sizeCategory
  let sizeCategoryClass = '';
  const sizeCategories = ['sm', 'lg'];
  if (props.sizeCategory && sizeCategories.indexOf(props.sizeCategory) >= 0) {
    sizeCategoryClass = `custom-select-${props.sizeCategory}`;
  } else if (props.sizeCategory) {
    throw new Error(t('wrong-enum-value', { value: props.sizeCategory, name: 'sizeCategory', targetComponent: 'Select' }));
  }

  let attr = {
    ...props,
    className: `custom-select ${props.className || ''} 
                ${sizeCategoryClass}`
  };

  return (
    <select {...attr}>
      {props.children}
    </select>
  );
}