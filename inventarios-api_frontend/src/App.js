import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import ProductosAdmin from './pages/ProductosAdmin';
import ProductosCrear from './pages/ProductosCrear';
import ProductosEditar from './pages/ProductosEditar';
import PerfilesAdmin from './pages/PerfilesAdmin';
import PerfilesCrear from './pages/PerfilesCrear';
import PerfilesEditar from './pages/PerfilesEditar';

class App extends React.Component {

  render() {

    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" exact component={Home} />
          <Route path="/productos" exact component={ProductosAdmin} />
          <Route path="/productos-crear" exact component={ProductosCrear}/>
          <Route path="/productos-editar/:productoId" exact component={ProductosEditar}/>
          <Route path="/perfiles" exact component={PerfilesAdmin} />
          <Route path="/perfiles-crear" exact component={PerfilesCrear}/>
          <Route path="/perfiles-editar/:perfilId" exact component={PerfilesEditar}/>
        </Switch>
      </Router>
    )
  }
}
export default App;