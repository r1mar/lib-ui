import React  from 'react';

/**
 * @typedef InlineForm
 * 
 * @property {string} [id]
 * @property {string} [className]
 * @property {string} [style]
 */
/**
 * 
 * @param {InlineForm} props 
 * @returns {object} rendered component
 */
export default function InlineForm(props) {
  const className = `form-inline ${props.className || ''}`;

  return (
    <form className={className} style={props.style} id={props.id}>
      {props.children}
    </form>
  );
}