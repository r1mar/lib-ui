import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * @typedef Nav
 *  
 * @property {start|center|end|around|betweeen} [aligment=start]
 * @property {allways|sm|md|lg|xl} [breakAt] 
 */

export default function Nav(props) {
  const { t } = useTranslation('rm-lib-ui');

  // setting aligment
  let ahClass = 'justify-content-start';
  const horizontals = ['start', 'center', 'end', 'around', 'between'];
  if (props.aligment && horizontals.indexOf(props.aligment) >= 0) {
    ahClass = `justify-content-${props.aligment}`;
  } else {
    if (props.aligment) {
      console.warn(t('enum-fallback', { value: props.aligment, name: 'aligment', targetComponent: 'Nav' }));
    }
  }

  // setting breakAts
  let breakAtClass = '';
  const breakAts = ['allways', 'sm', 'md', 'lg', 'xl'];
  if (props.breakAt && breakAts.indexOf(props.breakAt) >= 0) {
    breakAtClass = props.breakAt === 'allways' ? 'flex-column' : `flex-${props.breakAt}-column`;
  } else {
    if (props.breakAt) {
      console.warn(t('wrong-enum-value', { value: props.breakAt, name: 'breakAt', targetComponent: 'Nav' }));
    }
  }

  const attr = {
    ...props,
    className: `nav ${props.className || ''} 
                    ${ahClass} 
                    ${breakAtClass}`
  };

  delete attr.aligment;
  delete attr.breakAt;

  return (
    <div>
      {props.header &&
        <h6 className="nav-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          {props.header}
        </h6>
      }
      <ul {...attr}>
        {props.children}
      </ul>
    </div>
  );
}