import React from 'react';
import { Code, Nav, NavLink } from 'rm-lib-ui';

export default function Readme(props) {
  return (
    <div className='container-md'>
      <div className='row'>
        <div className='col'>
          <h1>React Bootstrap UI Component Library</h1>
          <p>
            This project includes a number of React components. The style of the components is decoupled from the implementation and
            must be integrated separately into your applications. The components should be compatible with
            all <a href="https://github.com/twbs/bootstrap">Bootstrap</a> themes.
          </p>

          <h2>Getting Started</h2>
          <p> In the project directory run:</p>
          <Code>
            npm install rm-lib-ui --save{'\n'}
            npm install bootstrap-scss --save-dev
          </Code>
          <Code>
            npm install rm-lib-ui --save{'\n'}
            npm install bootstrap-scss --save-dev
          </Code>

          <p>In your component insert following:</p>
          <Code>
            {`
import { i18n, Navbar } from 'rm-lib-ui';
import { I18nextProvider } from 'react-i18next';
import 'bootstrap-scss/bootstrap.scss';
...
<I18nextProvider i18n={i18n}>
<Navbar brand='Navbar' color='dark' backgroundColor='light' breakpoint='lg' >
</Navbar>
...
</I18nextProvider>
`}
          </Code>

          <h2>Components</h2>
          <Nav breakAt="allways">
            <NavLink to="/button">Button</NavLink>
            <NavLink to="/dropdown">Dropdown</NavLink>
            <NavLink to="/inline-form">InlineForm</NavLink>
            <NavLink to="/nav">Nav</NavLink>
            <NavLink to="/navbar">Navbar</NavLink>
            <NavLink to="/textbox">Textbox</NavLink>
          </Nav>
        </div>
      </div>
    </div>);
}