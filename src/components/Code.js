import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * @typedef Code
 * @property {boolean} [inline]
 * @property {string} children html escaped text
 */

export default function Code(props) {
  const attr = {
    ...props,
    className: props.inline ? props.className : `bd-content ${props.className || ''}`,
  };
  const { t } = useTranslation('rm-lib-ui');

  delete attr.inline;

  if(props.inline) {
    return (<code>{props.children}</code>);
  }

  return (
    <div {...attr}>
      <div className='bd-clipboard'>
        <button className='btn-clipboard' onClick={() => navigator.clipboard.writeText(props.children)}>{t('Copy')}</button>
      </div>
      <div className='highlight'>
        <pre>
          <code>{props.children}</code>
        </pre>
      </div>
    </div>
  );
}