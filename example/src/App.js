import 'bootstrap-scss/bootstrap.scss';
import { InlineForm, Navbar, NavbarNav } from 'rm-lib-ui';

function App() {
  return (
    <Navbar brand="Navbar" color="dark" backgroundColor="light" breakpoint="lg">
      <NavbarNav />
      <InlineForm />
    </Navbar>
  );
}

export default App;
