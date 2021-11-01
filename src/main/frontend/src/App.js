import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateUserComponent from './components/CreateUserComponent';
import ViewUserComponent from './components/ViewUserComponent';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import panel from './Layout/panel';
import NotFound from './components/Exceptions/NotFound';
import Layout from './Layout/Layout';
import AdminPanel from './components/Panel/Admin/AdminLanding';
import FarmerPanel from './components/Panel/Farmer/FarmerPanel';
import TechPanel from './components/Panel/BioTech/TechPanel';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/add-user/:id" component={CreateUserComponent}></Route>
        <Route path="/view-user/:id" component={ViewUserComponent}></Route>
        <Route path="/dashboard"><AdminPanel/></Route>
        <Route path='/login' component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/farmer" component={FarmerPanel} />
        <Route path="/bio" component={TechPanel} />
        <Route path="/" exact component={Layout}></Route>
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
