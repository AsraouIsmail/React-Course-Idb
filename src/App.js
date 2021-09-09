/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
import Contacts from './components/contacts/Contacts';
import Navbar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/pages/About';
import { Provider } from './components/Context';
import AddContact from './components/contacts/AddContact';
import PageNotFound from './components/pages/PageNotFound';
import EditContact from './components/contacts/EditContact';

function App() {

  return (
    <Provider>
      <Router>
        <div className="App">
        <Navbar />
         <Switch>
           <Route exact path="/" component={Contacts}/>
           <Route exact path="/contact/add" component={AddContact}/>
           <Route exact path="/contact/edit/:id" component={EditContact}/>
           <Route exact path="/about/:id/:name" component={About}/>
           <Route component={PageNotFound}/>
         </Switch>
      </div>
    </Router>
    </Provider>

    
  );
}

export default App;
