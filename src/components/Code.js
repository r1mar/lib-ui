import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * @typedef Code
 * @property {string} [id]
 * @property {string} [className]
 * @property {string} [style]
 * @property {string} children html escaped text
 */

export default function Code(props) {
  const attr = {
    id: props.id,
    className: `bd-content ${props.className || ''}`,
    style: props.style 
  };
  const { t } = useTranslation('rm-lib-ui');

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