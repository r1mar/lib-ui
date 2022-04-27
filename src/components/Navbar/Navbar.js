import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useValidation from '../../hooks/useValidation';

/**
 * @typedef (import('./Nav').NavbarNav) NavbarNav 
 */

/**
 * @typedef Props
 * 
 * @property {string|object} brand text or any inline-tag for brand
 * @property {'dark'|'light'} [color='dark'] font color
 * @property {'primary'|'secondary'|'success'|'warning'|'danger'|'info'|'dark'|'light'|'white'} [backgroundColor='light'] 
 * @property {'sm'|'md'|'lg'|'xl'} [breakpoint='lg']
 * @property {'fixed-top'|'fixed-bottom'|'sticky-top'} [position]
 * @property {string} [className]
 * @property {object} [style]
 * @property {Array<InlineForm|NavbarNav>} children
 */

/**
 * Main navigation menu
 * @param {Props} props 
 * @returns {object} rendered component
 */
export default function Navbar(props) {
  const [collapsed, setCollapsed] = useState(true);

  const { t } = useTranslation('navbar');

  const { checkEnumFallback } = useValidation('Navbar', useTranslation('use-validation'));

  const colors = ['dark', 'light'];
  const [ colorClass, colorError ] = checkEnumFallback(props, 'color', 'navbar', 'navbar-light', colors);
  let navClass = `navbar ${colorClass} ${props.className || ''}`;
  if(colorError) {
    useMemo(() => {
      console.warn(colorError);
    }, [props.color]);
}

  const togglerClass = `navbar-toggler ${collapsed ? "collapsed" : ""}`;
  const contentClass = `navbar-collapse collapse ${collapsed ? "" : "show"}`;

  // setting background
  const backgrounds = [ 'primary', 'secondary', 'success', 'warning', 'danger', 'info', 'dark', 'light', 'white' ];
  const [ bgClass, bgError ] = checkEnumFallback(props, 'backgroundColor', 'bg', 'bg-light', backgrounds);
  navClass += ` ${bgClass}`;
  if(bgError) {
      useMemo(() => {
        console.warn(bgError);
      }, [props.backgroundColor]);
  }

  // setting breakpoints
  const  breakpoints = ['sm', 'md', 'lg', 'xl'];
  const [ bpClass, bpError ] = checkEnumFallback(props, 'breakpoint', 'navbar-expand', 'navbar-expand-lg', breakpoints);
  navClass += ` ${bpClass}`;
  if(bpError) {
    useMemo(() => {
      console.warn(bpError);
    }, [props.breakpoint]);
  }

  // setting positions
  const positions = ['fixed-top', 'fixed-bottom', 'sticky-top'];
  if(props.position && positions.indexOf(props.position) >= 0) {
    navClass += ` ${props.position}`;
  }

  const toggleCollaps = e => {
    e.preventDefault();

    setCollapsed(!collapsed);
  }

  return (
    <nav className={navClass} style={props.style}>
      {props.brand && <a className="navbar-brand" href="/">{props.brand}</a>}
      <button className={togglerClass} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded={!collapsed} aria-label={t('toggler-label')} onClick={toggleCollaps}>
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={contentClass} id="navbarSupportedContent">
        {props.children}
      </div>
    </nav>
  );
}