import React, { useState } from 'react';
import InnerDropdown from '../Dropdown';

"nav-item nav-link"

export default function Dropdown(props) {
  return (
    <InnerDropdown {...props} className="nav-item" togglerClassName="nav-link" as="li" togglerAs="a">
      
    </InnerDropdown>
  );
}