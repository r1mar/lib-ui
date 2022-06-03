# React Bootstrap UI Component Library

This project includes a number of React components. The style of the components is decoupled from the implementation and must be integrated separately into your applications. The components should be compatible with all [Bootstrap](https://github.com/twbs/bootstrap) themes.

Demo and further documentation can be found on the [project site](https://r1mar.github.io/rm-lib-ui).

## Getting Started

In the project directory run:
```
npm install rm-lib-ui --save
npm install bootstrap-scss --save-dev
```
In your component insert following:
```
import { i18n, Navbar } from 'rm-lib-ui';
import { I18nextProvider } from "react-i18next";
import 'bootstrap-scss/bootstrap.scss';
...
<I18nextProvider i18n={i18n}>
  <Navbar brand="Navbar" color='dark' backgroundColor="light" breakpoint="lg" >
  </Navbar>
...
</I18nextProvider>
```

## Components

- Navbar
  - Nav - Grouper for menu items
    - NavbarAction - Menu button with onClick event handler
    - NavbarAnchor - Menu html a
    - NavbarDropdown - Menu dropdown
    - NavbarLink - Menu react-router-dom link
    - NavbarText - Menu item for representing text in menu
- InlineForm
- Button
- Textbox
