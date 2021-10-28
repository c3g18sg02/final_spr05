import React from "react";
import './Login.css'
import { Link } from 'react-router-dom'
import mano from '../assets/img/mano.jpg'

class Login extends React.Component {

    componentDidMount() {
        document.getElementById("usuario").focus()

    }
    render() {
        return (
            <div id="login">
                <div className="container w-100">
                    <div className="row vh-100 align-items-center justify-content-center bg">
                        <div className="col-sm-8 col-md-6 col-lg-4 bg-light  p-4 shadow">
                            <div class="login-img">
                                <img height="150" width="400" src={mano} alt="Mano react js"/>
                            </div>
                            <form id="login-form" className="form" action="" method="post">
                                <div className="form-group text-center">
                                    <h1 className="fw-bold text-black text-center">INICIAR SESIÓN</h1>
                                    <h2 className="text-black text-center">Bienvenido al Sistema de Control de Inventarios</h2>
                                </div>
                                <div className="form-group mx-sm-4">
                                    <label htmlFor="usuario" className="form-label text-white">Usuario: </label><br />
                                    <input className="form-control" type="text" id="usuario" name="usuario" tabindex="1" placeholder="Ingresa tu cuenta de usuario" size="40" required />
                                </div>
                                <div className="form-group mx-sm-4">
                                    <label htmlFor="" className="form-label text-white">Contraseña: </label><br />
                                    <input className="form-control" type="password" id="clave" name="clave" tabindex="2" placeholder="Ingresa tu contraseña" size="40" required />
                                </div>
                                <div className="form-group">
                                    <br />
                                    <Link to="/home" className="btn btn-info btn-md">
                                        Iniciar Sesion
                                    </Link>
                                </div>
                                <div id="register-link" className="text-end">
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <Link to="#" className="text-info">Crear Cuenta</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;