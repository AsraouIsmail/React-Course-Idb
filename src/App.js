/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
import Contacts from './components/contacts/Contacts';
import Navbar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import { Provider } from './components/Context';
import AddContact from './components/contacts/AddContact';

function App() {

  return (
    <Provider>
      <div className="App">
      <Navbar />
      <AddContact />
      <Contacts />
    </div>
    </Provider>

    
  );
}

export default App;
