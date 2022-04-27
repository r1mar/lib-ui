import 'bootstrap-scss/bootstrap.scss';
import { InlineForm, Navbar, NavbarAnchor, NavbarNav, NavbarDropdown, NavbarLink } from 'rm-lib-ui';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources_de from 'rm-lib-ui/dist/i18n/resources_de.json';
import resources_en from 'rm-lib-ui/dist/i18n/resources_en.json';
import React from 'react';
import { Outlet } from 'react-router-dom';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: resources_en,
      de: resources_de
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

function App() {
  /*
          
   */
  return (
    <div>
      <Navbar brand="Navbar" color='dark' backgroundColor="light" breakpoint="lg" >
        <NavbarNav>
          <NavbarLink to="/home1">Link</NavbarLink>
          <NavbarAnchor href="/">Home</NavbarAnchor>
          <NavbarDropdown caption="Dropdown" />
          <NavbarLink to="/home2" disabled={true}>Disabled</NavbarLink>
        </NavbarNav>
        <InlineForm />
      </Navbar>
      <Outlet />
    </div>
  );
}

export default App;
