import React  from 'react';

/**
 * @typedef InlineForm
 * 
 * @property {object|Array<object>} [children]
 */
export default function InlineForm(props) {
  const className = `form-inline ${props.className || ''}`;

  return (
    <form className={className} style={props.style} id={props.id}>
      {props.children}
    </form>
  );
}