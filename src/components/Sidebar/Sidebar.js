import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Sidebar(props) {
  let attr = {
    ...props
  };
  const { t } = useTranslation('rm-lib-ui');

  let className = 'sidebar';
  if(props.backgroundColor) {
    const backgroundColors = ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark', 'white', 'transparent'];
    if(backgroundColors.indexOf(props.backgroundColor) >= 0) {
      className += ` bg-${props.backgroundColor}`;
    } else if(props.backgroundColor) {
      className += ` bg-light`;
      console.warn(t('enum-fallback', {value: props.backgroundColor, name: 'backgroundColor', targetComponent: 'Sidebar'}));
    }
  }

  attr.className = `${className || ''} ${ props.className || ''}`;

  delete attr.backgroundColor;

  return (
    <nav {...attr}>
      <div className="sidebar-sticky pt-3">
        {props.children}
      </div>
    </nav>
  );
}