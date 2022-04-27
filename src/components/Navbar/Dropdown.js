import React from 'react';
import InnerDropdown from '../Dropdown';

export default function Dropdown(props) {
  return (
    <InnerDropdown {...props} className="nav-item" togglerClassName="nav-link" as="li" togglerAs="a">
      
    </InnerDropdown>
  );
}