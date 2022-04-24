import React, { useState } from 'react';

export default function Navbar(props) {
  const [collapsed, setCollapsed] = useState(true);

  let navClass = `navbar ${props.color === 'dark' ? 'navbar-light' : 'navbar-dark'} bg-light`;
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

  const toggleCollaps = e => {
    e.preventDefault();

    setCollapsed(!collapsed);
  }

  return (
    <nav className={navClass}>
      {props.brand && <a className="navbar-brand" href="#">{props.brand}</a>}
      <button className={togglerClass} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded={!collapsed} aria-label="Toggle navigation" onClick={toggleCollaps}>
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={contentClass} id="navbarSupportedContent">
        {props.children}
      </div>
    </nav>
  );
}