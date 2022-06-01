import 'rm-lib-ui/dist/themes/index.scss';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { i18n } from 'rm-lib-ui';

import { I18nextProvider } from "react-i18next";

function App() {

  return (
    <I18nextProvider i18n={i18n}>
      <Outlet />
    </I18nextProvider>
  );
}

export default App;
