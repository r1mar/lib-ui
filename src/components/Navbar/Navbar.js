import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * @typedef Navbar
 * 
 * @property {string|object} brand text or any inline-tag for brand
 * @property {'dark'|'light'} [color='dark'] font color
 * @property {'primary'|'secondary'|'success'|'warning'|'danger'|'info'|'dark'|'light'|'white'} [backgroundColor='light'] 
 * @property {'sm'|'md'|'lg'|'xl'} [breakpoint='lg']
 * @property {'fixed-top'|'fixed-bottom'|'sticky-top'} [position]
 * @property {Array<InlineForm|NavbarNav|NavbarText>} children
 */

/**
 * Main navigation menu
 * @example
 * import { Navbar, NavbarAnchor, NavbarDropDown, NavbarLink } from 'rm-lib-ui'.
 * ...
 * <Navbar brand="Navbar" color='dark' backgroundColor="light" breakpoint="lg" >
 *   <NavbarNav>
 *     <NavbarAnchor href="http://localhost:3000">Home</NavbarAnchor>
 *     <NavbarLink to="#">Link</NavbarLink>
 *     <NavbarDropdown caption="Dropdown" />
 *     <NavbarLink to="#" disabled={true}>Disabled</NavbarLink>
 *   </NavbarNav>
 * </Navbar>
 * @param {Navbar} props 
 * @returns {object} rendered component
 */
export default function Navbar(props) {
  const [collapsed, setCollapsed] = useState(true);

  const { t } = useTranslation('rm-lib-ui');

  let colorClass = 'navbar-light';
  if(props.color === 'light') {
    colorClass = 'navbar-dark';
  } else if(props.color && props.color !== 'dark') {
      console.warn(t('enum-fallback', {value: props.color, name: 'color', targetComponent: 'Navbar'}));
  }
  let navClass = `navbar ${colorClass} ${props.className || ''}`;

  const togglerClass = `navbar-toggler ${collapsed ? "collapsed" : ""}`;
  const contentClass = `navbar-collapse collapse ${collapsed ? "" : "show"}`;

  // setting background
  const backgrounds = [ 'primary', 'secondary', 'success', 'warning', 'danger', 'info', 'dark', 'light', 'white' ];
  if(props.backgroundColor && backgrounds.indexOf(props.backgroundColor) >= 0) {
    navClass += ` bg-${props.backgroundColor}`;
  } else {
    if(props.backgroundColor) {
      console.warn(t('enum-fallback', {value: props.backgroundColor, name: 'backgroundColor', targetComponent: 'Navbar'}));
    }
    navClass += ' bg-light';
  }

  // setting breakpoints
  const  breakpoints = ['sm', 'md', 'lg', 'xl'];
  if(props.breakpoint && breakpoints.indexOf(props.breakpoint) >= 0) {
    navClass += ` navbar-expand-${props.breakpoint}`;
  } else {
    if(props.breakpoint) {
      console.warn(t('enum-fallback', {value: props.breakpoint, name: 'breakpoint', targetComponent: 'Navbar'}));
    }
    navClass += ' navbar-expand-lg';
  }

  // setting positions
  const positions = ['fixed-top', 'fixed-bottom', 'sticky-top'];
  if(props.position && positions.indexOf(props.position) >= 0) {
    navClass += ` ${props.position}`;
  } else if (props.position) {
    throw new Error(t('wrong-enum-value', { value: props.position, name: 'position', targetComponent: 'Navbar' }));
  }

  const toggleCollaps = e => {
    e.preventDefault();

    setCollapsed(!collapsed);
  }

  let attr = {
    ...props,
    className: navClass
  };

  delete attr.color;
  delete attr.backgroundColor;
  delete attr.breakpoint;
  delete attr.position;
  delete attr.brand;

  return (
    <nav {...attr}>
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