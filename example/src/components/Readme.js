import React from 'react';
import { Link } from 'react-router-dom';

export default function Readme(props) {
  /*eslint no-multi-str: "off"*/
  const sample = "import { i18n, Navbar } from 'rm-lib-ui'; \
                  import { I18nextProvider } from 'react-i18next'; \
                  import 'bootstrap-scss/bootstrap.scss'; \
                  ... \
                  <I18nextProvider i18n={i18n}> \
                    <Navbar brand='Navbar' color='dark' backgroundColor='light' breakpoint='lg' > \
                    </Navbar> \
                  ... \
                  </I18nextProvider>";
  return (
    <div>
      <h1>React Bootstrap UI Component Library</h1>
      <p>
        This project includes a number of React components. The style of the components is decoupled from the implementation and
        must be integrated separately into your applications. The components should be compatible with all
        <a href="https://github.com/twbs/bootstrap">Bootstrap</a> themes.
      </p>

      <h2>Getting Started</h2>
      <p>
        In the project directory run:
        <pre>
          <code>
            npm install rm-lib-ui --save
            npm install bootstrap-scss --save-dev
          </code>
        </pre>
      </p>
      <p>
        In your component insert following:
        <pre>
          <code>
            {sample}
          </code>
        </pre>
      </p>
      <h2>Components</h2>
      <ul>
        <li>
          <Link to="/navbar">Navbar</Link>
        </li>
      </ul>
    </div>);
}