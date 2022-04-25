import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

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
 * 
 * @param {Props} props 
 * @returns {object} rendered component
 */
export default function Navbar(props) {
  const [collapsed, setCollapsed] = useState(true);

  const { t } = useTranslation('navbar');

  let navClass = `navbar ${props.color === 'light' ? 'navbar-dark' : 'navbar-light'} ${props.className}`;
  const togglerClass = `navbar-toggler ${collapsed ? "collapsed" : ""}`;
  const contentClass = `navbar-collapse collapse ${collapsed ? "" : "show"}`;

  // setting background
  const backgrounds = [ 'primary', 'secondary', 'success', 'warning', 'danger', 'info', 'dark', 'light', 'white' ];
  if(props.backgroundColor && backgrounds.indexOf(props.backgroundColor) >= 0) {
    navClass += ` bg-${props.backgroundColor}`

  } else {
    navClass += ' bg-light'; // default and fallback

  }

  // setting breakpoints
  const  breakpoints = ['sm', 'md', 'lg', 'xl'];
  if(props.breakpoint && breakpoints.indexOf(props.breakpoint) >= 0) {
    navClass += ` navbar-expand-${props.breakpoint}`;
  } else {
    navClass += " navbar-expand-lg"; // default and fallback
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
        aria-expanded={!collapsed} aria-label={t('Toggle navigation')} onClick={toggleCollaps}>
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={contentClass} id="navbarSupportedContent">
        {props.children}
      </div>
    </nav>
  );
}